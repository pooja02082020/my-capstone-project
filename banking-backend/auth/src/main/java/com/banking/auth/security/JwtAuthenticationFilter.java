package com.banking.auth.security;

import java.io.IOException;
import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
 
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
 
	private final JwtUtil jwtUtil;
	
 
	public JwtAuthenticationFilter(JwtUtil jwtUtil) {
		super();
		this.jwtUtil = jwtUtil;
	}
 
 
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
 
		String header = request.getHeader("Authorization");
 
		if (header != null && header.startsWith("Bearer ")) {
			String token = header.substring(7);
			String username = jwtUtil.getUsername(token);
			String role = jwtUtil.getClaims(token).get("role", String.class);
 
			UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(username, null,
					List.of(new SimpleGrantedAuthority("ROLE_" + role)));
 
			SecurityContextHolder.getContext().setAuthentication(auth);
		}
		filterChain.doFilter(request, response);
	}
}
 
