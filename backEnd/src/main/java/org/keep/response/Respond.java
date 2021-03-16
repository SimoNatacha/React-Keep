package org.keep.response;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.MediaType;
import java.util.HashMap;
import java.util.Map;

public class Respond {

    Boolean success;
    String message;
    Object responseObject;

    public Respond(Boolean success, String message) {
        this.success=success;
        this.message=message;
    }
    public Respond(Boolean success, String message,Object responseObject) {
        this.success=success;
        this.message=message;
        this.responseObject=responseObject;
    }

    public static Object response(Boolean success, String message, Object responseObject){
        Map reply = new HashMap<>();
        reply.put("success", success);
        reply.put("message",message);
        reply.put("response",responseObject );
        return Response.ok(success, MediaType.APPLICATION_JSON).header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT").build();
    }
}
