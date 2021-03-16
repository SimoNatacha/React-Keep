package org.keep.dao;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.keep.connector.Connector;
import org.keep.entities.Note;
import org.keep.entities.User;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

public class NoteDao {

    static Session session = Connector.getSessionFactory().openSession();

    public static String createNote(String note, String title,Integer id) {
        User user = new UserDao().readUser(id);
        Note noteI = new Note();


        Transaction tx = session.beginTransaction();
        try {
            noteI.setNote(note);

            noteI.setTitle(title);
            noteI.setUser(user);
            noteI.setuId(id);
            session.saveOrUpdate(noteI);


            tx.commit();

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }

        return "Note Information saved successfully with id: " + noteI.getId();
    }

    public static List<Note> listAll() {
        CriteriaQuery<Note> criteriaQuery = session.getCriteriaBuilder().createQuery(Note.class);
        criteriaQuery.from(Note.class);

        return session.createQuery(criteriaQuery).getResultList();
    }

    public static Object listUAll(Integer user_id) {

        CriteriaBuilder cb = session.getCriteriaBuilder();

        CriteriaQuery<Note> cr = cb.createQuery(Note.class);

        Root<Note> root = cr.from(Note.class);

        cr.select(root).where(cb.equal(root.get("uId"), user_id));  //here you pass a class field, not a table column (in this example they are called the same)

        Query<Note> query = session.createQuery(cr);


        return query.getResultList();
    }


    public static void UpdateNote(Integer id, String title, String notes) {

        Session session = Connector.sessionFactory.openSession();

        try {
            Transaction txn = session.beginTransaction();
            Note note = session.get(Note.class, id);
note.setTitle(title);
note.setNote(notes);


            session.saveOrUpdate("Note",note);
            txn.commit();

        } catch ( Exception e) {
            e.printStackTrace();
        }


    }

}
