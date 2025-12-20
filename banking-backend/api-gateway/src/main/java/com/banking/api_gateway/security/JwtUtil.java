package com.banking.api_gateway.security;
 
import java.util.Date;
 
import org.springframework.stereotype.Component;
 
import io.jsonwebtoken.Claims;

import io.jsonwebtoken.Jwts;

import io.jsonwebtoken.security.Keys;
 
@Component

public class JwtUtil {
 
    private static final String SECRET = "my-secret-key-my-secret-key";
 
    public Claims extractClaims(String token) {

        return Jwts.parserBuilder()

                .setSigningKey(Keys.hmacShaKeyFor(SECRET.getBytes()))

                .build()

                .parseClaimsJws(token)

                .getBody();

    }
 
    public boolean isTokenExpired(Claims claims) {

        return claims.getExpiration().before(new Date());

    }

}

 