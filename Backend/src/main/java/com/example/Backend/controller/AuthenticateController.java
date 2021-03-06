package com.example.Backend.controller;

import com.example.Backend.config.JwtUtils;
import com.example.Backend.models.JwtRequest;
import com.example.Backend.models.JwtResponse;
import com.example.Backend.models.User;
import com.example.Backend.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticateController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    //generate token
@PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {

        try{
            authenticate(jwtRequest.getUsername(),jwtRequest.getPassword());
        }catch (UsernameNotFoundException e){
            throw  new Exception("User not found");

        }
        ////authenticate
    UserDetails userDetails=this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
        String token=this.jwtUtils.generateToken(userDetails);


        return ResponseEntity.ok(new JwtResponse(token));
            }
    private  void authenticate(String username,String password) throws Exception {


        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
        }catch (DisabledException e){
            throw  new Exception( "User Disabled"+e.getMessage());
        }catch (BadCredentialsException e)
        {
            throw  new Exception("Invalid Credentials " + e.getMessage());
        }
    }
    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal){
   return ((User)this.userDetailsService.loadUserByUsername(principal.getName()));
    }
}
