package org.keep.helper;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.keep.Main;

import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

public class JwTokenHelper {

    private static JwTokenHelper jwTokenHelper = null;
    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    private JwTokenHelper() {
    }
    public static JwTokenHelper getInstance() {
        if(jwTokenHelper == null)
            jwTokenHelper = new JwTokenHelper();
        return jwTokenHelper;
    }
    //  1
    public String generatePrivateKey(String username, Object object) {
        Instant now = Instant.now();
        return Jwts
                .builder()
                .setSubject(username)
                .setIssuer(Main.BASE_URI)
                .claim("userDetails",object)
                .setExpiration(Date.from(now.plus(30, ChronoUnit.MINUTES)))
                .setIssuedAt(Date.from(now))
                .signWith(key)
                .compact();
    }

    // 2
    public void claimKey(String privateKey) throws ExpiredJwtException, MalformedJwtException {
        Jwts
                .parser()
                .setSigningKey(key)
                .parseClaimsJws(privateKey);
    }
}
