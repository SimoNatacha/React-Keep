//package org.keep.jjwtFilter;
//
//import com.sun.jersey.core.util.Priority;
//import com.sun.jersey.spi.container.ContainerRequest;
//import com.sun.jersey.spi.container.ContainerRequestFilter;
//import io.jsonwebtoken.ExpiredJwtException;
//import io.jsonwebtoken.MalformedJwtException;
//import org.keep.helper.JwTokenHelper;
//
//import javax.ws.rs.Priorities;
//import javax.ws.rs.WebApplicationException;
//import javax.ws.rs.core.MediaType;
//import javax.ws.rs.core.Response;
//import javax.ws.rs.ext.Provider;
//
//@Provider// 1
//@Priority(Priorities.AUTHENTICATION)  // 2
//public class JsTokenFilterNeeded implements ContainerRequestFilter {
//
//    private static final String AUTHORIZATION_SERVICE_PATH = "authorization_service";
//    private static final String PRIVATE_KEY = "privateKey";
//    private JwTokenHelper jwTokenHelper = JwTokenHelper.getInstance();
//
//    @Override
//    public ContainerRequest filter(ContainerRequest request) {  // 3
//        String path = request.getPath();
//        if(path.equals(AUTHORIZATION_SERVICE_PATH)) {       // |       4
//            return request;
//        }
//        String privateKeyHeaderValue = request.getHeaderValue(PRIVATE_KEY);  // 5
//        if (privateKeyHeaderValue == null || privateKeyHeaderValue.isEmpty()) {
//            throw new WebApplicationException(getUnAuthorizeResponse(PRIVATE_KEY + " is missing in header"));
//        }  // 6
//        try {
//           jwTokenHelper.claimKey(privateKeyHeaderValue);   // 7
//        } catch(Exception e) {
//            if (e instanceof ExpiredJwtException) {
//                throw new WebApplicationException(getUnAuthorizeResponse(PRIVATE_KEY + " is expired"));
//            } else if (e instanceof MalformedJwtException) {
//                throw new WebApplicationException(getUnAuthorizeResponse(PRIVATE_KEY + " is not correct"));
//            }
//        }
//        return request;
//    }
//    private Response getUnAuthorizeResponse(String message) {
//        return Response.ok("BaseResponse.FAILURE", message
//        ).status(Response.Status.UNAUTHORIZED)
//                .type(MediaType.APPLICATION_JSON)
//                .build();
//    }
//}
