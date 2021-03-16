package org.keep.resources;

import org.keep.dao.UserDao;
import org.keep.entities.User;
import org.keep.response.Respond;
import org.keep.utils.EmailUtil;

import javax.json.JsonObject;
import javax.mail.*;
import javax.mail.internet.*;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.*;

@Path("/")
@Consumes(MediaType.APPLICATION_JSON)
public class UserResources {


    @GET
    @Path("users")
    @Produces(MediaType.APPLICATION_JSON)
    public Object listUsers() {
        List<User> list = UserDao.listAll();

        return list;
    }

    @POST
    @Path("login")
    @Consumes (MediaType.APPLICATION_JSON)
    @Produces (MediaType.APPLICATION_JSON)
    public Object Login(JsonObject objectData) {

        if (objectData.containsKey("googleId")){
           try {
               return UserDao.getGuByEmail(objectData.getString("googleId"));
           }catch (Exception e){
               e.printStackTrace();
           }

        }else{
            try {
                return UserDao.getUserByEmail(objectData.getString("email"),objectData.getString("password"));
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    return "Failed";
    }

    @GET
    @Path("send")
    @Consumes (MediaType.APPLICATION_JSON)
    @Produces ({MediaType.APPLICATION_JSON ,MediaType.TEXT_PLAIN})
    public void email() throws Exception {
        System.out.println("SimpleEmail Start");

        List<User> list = UserDao.listAll();
        for (int i =0;i<list.size();i++){
            System.out.println("i: "+ list.get(i));
            EmailUtil.send(list.get(i).getEmail());

        }
    }

    @GET
    @Path("send/{id}")
    @Consumes (MediaType.APPLICATION_JSON)
    @Produces ({MediaType.APPLICATION_JSON ,MediaType.TEXT_PLAIN})
    public void emailId(@PathParam("id") Integer id) throws Exception {
        UserDao.readUser(id);
        System.out.println("SimpleEmail Start");

        EmailUtil.send(UserDao.readUser(id).getEmail());
    }


    @POST
    @Path("exist")
    @Consumes (MediaType.APPLICATION_JSON)
    @Produces ({MediaType.APPLICATION_JSON ,MediaType.TEXT_PLAIN})
    public Object exist(JsonObject objectData) {

        return UserDao.CheckIfExists(objectData.getString("email"));
    }

    @POST
    @Path("createUser")
    @Consumes (MediaType.APPLICATION_JSON)
    public Object createUser(JsonObject objectData) {

        if(UserDao.CheckIfExists(objectData.getString("email"))){

            Map tk = new HashMap<>();
            tk.put("success", false);
            tk.put("message", "User Already exists");
            tk.put("response", "");

            return   Response.ok(tk, MediaType.APPLICATION_JSON).build();

        }else {


            if (objectData.containsKey("googleId")){
                try {

                    Map reply = new HashMap<>();
                    reply.put("success", true);
                    reply.put("message", "Google User created successfully");
                    reply.put("response", "");
                    UserDao.insertGoogleUser(objectData.getString("familyName"), objectData.getString("givenName"), objectData.getString("email"), objectData.getString("googleId"), objectData.getString("imageUrl"));

                    return   Response.ok(reply, MediaType.APPLICATION_JSON).build();
                }catch (Exception e){
                    e.printStackTrace();
                }
            }else{
                System.out.println("normal signup");
                try {
                    new UserDao().insertNewUser(objectData.getString("first_name"), objectData.getString("last_name"), objectData.getString("password"), objectData.getString("email"));
                    Map to = new HashMap<>();
                    to.put("success", true);
                    to.put("message", "User created successfully");
                    to.put("response", "");
                    return   Response.ok(to, MediaType.APPLICATION_JSON).build();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }


        return "Failed";
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN})
    public User getUser(@PathParam("id") Integer id) {


        try {

            return new UserDao().readUser(id);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    @POST
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN})
    public static Object updateUser(@PathParam("id") Integer id, JsonObject objectData) {
        try {
            UserDao.UpdateUser(id, objectData.getString("first_name"), objectData.getString("last_name"), objectData.getString("password"), objectData.getString("email"));


        } catch (Exception e) {
            e.printStackTrace();
        }

        return "Failed";
    }



}
