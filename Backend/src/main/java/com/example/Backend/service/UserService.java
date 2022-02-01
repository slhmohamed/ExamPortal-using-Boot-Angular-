package com.example.Backend.service;

import com.example.Backend.models.Role;
import com.example.Backend.models.User;
import com.example.Backend.models.UserRole;

import java.util.List;
import java.util.Set;

public interface UserService {
    // create user
     public User createUser(User user, Set<UserRole> userRole) throws Exception;
    // get user by username

    public User getUser(String username);


    public List<User> list();

    //delete user by id
    public void deleteUser (Long userId);
}
