package org.keep.resources;

import org.keep.dao.NoteDao;
import org.keep.entities.Note;

import javax.json.JsonObject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("notes")
@Consumes(MediaType.APPLICATION_JSON)
public class NoteResources {


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Object listNotes() {
        List<Note> list = NoteDao.listAll();

        if (list.size() > 0) {
            Map<Object, Object> reply = new HashMap<>();
            reply.put("success", true);
            reply.put("message", "Notes Gotten successfully");
            reply.put("response", list);
            return Response.ok(reply, MediaType.APPLICATION_JSON).build();

        } else {
            return "NO NOTES";
        }

    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Object listUNotes(@PathParam("id") Integer id) {


        Map<Object, Object> reply = new HashMap<>();
            reply.put("success", true);
            reply.put("message", "Notes Gotten successfully");
            reply.put("response",   NoteDao.listUAll(id));

            return Response.ok(reply, MediaType.APPLICATION_JSON).build();



    }

    @POST
    @Path("{id}/createNote")
    @Consumes({MediaType.APPLICATION_JSON,MediaType.APPLICATION_ATOM_XML,MediaType.TEXT_PLAIN})
    @Produces(MediaType.APPLICATION_JSON)
    public Object createNOTE(@PathParam("id") Integer id, JsonObject objectData) {
        try {
            Map<Object, Object> suc = new HashMap<>();
            suc.put("success", true);
            suc.put("message", "Note Created successfully");
            suc.put("response", "response");
            NoteDao.createNote(objectData.getString("note"), objectData.getString("title"), id);
            return Response.ok(suc, MediaType.APPLICATION_JSON)
                   .build();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return "Failed with id " + id + " and note " + objectData;
    }


    @POST
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces({MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN})
    public static Object updateUser(@PathParam("id") Integer id, JsonObject objectData) {
        try {
            NoteDao.UpdateNote(id, objectData.getString("note"), objectData.getString("title"));

        } catch (Exception e) {
            System.out.println("Exception");
            e.printStackTrace();
        }

        return "";
    }


}
