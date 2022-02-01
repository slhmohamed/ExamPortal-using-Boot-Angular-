package com.example.Backend.service.impl;

import com.example.Backend.models.User;
import com.example.Backend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user=  this.userRepository.findByUsername(username);

     if(user==null)
     {
         System.out.println("User noooot found");
         throw new UsernameNotFoundException("No user found!!");
     }
     System.out.println(user);
     return user;
    }
}
