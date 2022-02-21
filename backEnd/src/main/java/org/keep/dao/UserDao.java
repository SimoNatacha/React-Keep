package org.keep.dao;


import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.keep.connector.Connector;
import org.keep.entities.User;
import org.keep.helper.JwTokenHelper;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class UserDao {

    static Session session = Connector.getSessionFactory().openSession();
    public void insertNewUser(String fname,String lname,String password,String email) {
        Transaction tx = session.beginTransaction();
        User user = new User();
        try {
            user.setConnected_date();
            user.setFname(fname);
            user.setEmail(email);
            user.setLname(lname);
            user.setActive(false);
            user.setPassword(password);
            session.save(user);

            tx.commit();
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }

    }
    public static void insertGoogleUser(String fname,String lname,String email, String googleId, String imageUrl) {
        Transaction tx = session.beginTransaction();
        User user = new User();
        try {
            user.setConnected_date();
            user.setFname(fname);
            user.setEmail(email);
            user.setLname(lname);
            user.setGoogleId(googleId);
            user.setActive(false);
            user.setImageUrl(imageUrl);
            session.save(user);
            tx.commit();

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }

    }

    public static Object getUserByEmail(String email, String password) {
        if (CheckIfExists(email)){


            CriteriaBuilder cb = session.getCriteriaBuilder();

            CriteriaQuery<User> cr = cb.createQuery(User.class);

            Root<User> root = cr.from(User.class);
            cr.select(root).where(cb.equal(root.get("email"), email));  //here you pass a class field, not a table column (in this example they are called the same)

            Query<User> query = session.createQuery(cr);
            query.setMaxResults(1);

            List<User> result = query.getResultList();
            String userP =result.get(0).getPassword();

            if (userP.equals(password)){
                result.get(0).setActive(true);
                Map suc = new HashMap<>();
                suc.put("success", true);
                suc.put("message", "Login successfully");
                suc.put("token",JwTokenHelper.getInstance().generatePrivateKey(email,result.get(0)));
                suc.put("response", result.get(0));
                System.out.println("Logged: "+ result.get(0).getLname() );
                return  Response.ok(suc, MediaType.APPLICATION_JSON).build();
            }else{
                Map succ = new HashMap<>();
                succ.put("success", false);
                succ.put("message", "Either email or password is incorrect");
                succ.put("token",null);
                succ.put("response", "{}");

                return Response.ok(succ, MediaType.APPLICATION_JSON).build();
            }
        }else{
            Map succt = new HashMap<>();
            succt.put("success", false);
            succt.put("message", "User doesn't exist");
            succt.put("token",null);
            succt.put("response", "{}");
            return Response.ok(succt, MediaType.APPLICATION_JSON).build();
        }




    }
    public static User readUser(Integer id) {
        User user;
        Transaction tx = session.beginTransaction();
        user = session.get(User.class, id);

        tx.commit();
        return user;
    }

    public static List<User> listAll() {
        CriteriaQuery<User> criteriaQuery = session.getCriteriaBuilder().createQuery(User.class);
        criteriaQuery.from(User.class);

        return session.createQuery(criteriaQuery).getResultList();
    }

    public static void UpdateUser(Integer id, String fname, String lname, String password, String email) {

        Session session = Connector.sessionFactory.openSession();

        try {
            Transaction txn = session.beginTransaction();
            User user = session.get(User.class, id);

            user.setConnected_date();
           user.setFname(fname);
           user.setLname(lname);
           user.setPassword(password);
           user.setEmail(email);

            session.saveOrUpdate("User",user);
            txn.commit();

        } catch ( Exception e) {
            e.printStackTrace();
        }


    }

    public static Object    getGuByEmail(String googleId) {
        if (CheckGuExists(googleId)){

            CriteriaBuilder cb = session.getCriteriaBuilder();

            CriteriaQuery<User> cr = cb.createQuery(User.class);

            Root<User> root = cr.from(User.class);
            cr.select(root).where(cb.equal(root.get("googleId"), googleId));  //here you pass a class field, not a table column (in this example they are called the same)

            Query<User> query = session.createQuery(cr);
            query.setMaxResults(1);

            List<User> result = query.getResultList();
            String email =result.get(0).getEmail();

            result.get(0).setActive(true);

            Map go = new HashMap<>();
            go.put("success", true);
            go.put("message", "Login successfully");
            go.put("token",JwTokenHelper.getInstance().generatePrivateKey(email,result.get(0)));
            go.put("response", result.get(0));
            System.out.println("Logged: "+ result.get(0).getLname() );
            return  Response.ok(go, MediaType.APPLICATION_JSON).build();


        }else{
            Map succt = new HashMap<>();
            succt.put("success", false);
            succt.put("message", "User doesn't exist");
            succt.put("token",null);
            succt.put("response", "{}");
            return Response.ok(succt, MediaType.APPLICATION_JSON).build();
        }




    }


    public static boolean CheckIfExists(String username)
    {
        boolean usernameExists = false;

        try
        {

            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/Keep?serverTimezone=UTC", "simo", "natacha");

            PreparedStatement st = connection.prepareStatement("select * from users where email = ?");
            st.setString(1, username);
            ResultSet r1=st.executeQuery();
            String usernameCounter;
            if(r1.next())
            {
                usernameCounter =  r1.getString("email");
                if(usernameCounter.equals(username)) //this part does not happen even if it should
                {
                    usernameExists = true;
                }
            }


        }

        catch (SQLException e)
        {
            System.out.println("SQL Exception: "+ e.toString());
        }
        catch (ClassNotFoundException cE)
        {
            System.out.println("Class Not Found Exception: "+ cE.toString());
        }
        return usernameExists;
    }

    public static boolean CheckGuExists(String username)
    {
        boolean usernameExists = false;

        try
        {

            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/Keep?serverTimezone=UTC", "simo", "natacha");

            PreparedStatement st = connection.prepareStatement("select * from users where googleId = ?");
            st.setString(1, username);
            ResultSet r1=st.executeQuery();
            String usernameCounter;
            if(r1.next())
            {
                usernameCounter =  r1.getString("googleId");
                if(usernameCounter.equals(username)) //this part does not happen even if it should
                {
                    usernameExists = true;
                }
            }


        }

        catch (SQLException e)
        {
            System.out.println("SQL Exception: "+ e.toString());
        }
        catch (ClassNotFoundException cE)
        {
            System.out.println("Class Not Found Exception: "+ cE.toString());
        }
        return usernameExists;
    }




}
