package com.example.Backend.controller;

import com.example.Backend.helper.UserFoundException;
import com.example.Backend.models.Role;
import com.example.Backend.models.User;
import com.example.Backend.models.UserRole;
import com.example.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;
@Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    //creating user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {
        user.setProfile("default.png");

        //encoded password wiyh bCryptPasswordEncoder
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));
        Set<UserRole> roles=new HashSet<>();
        Role role=new Role();
        role.setRoleId(45L);
        role.setRoleName("NORMAL");
        UserRole userRole=new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);
        roles.add(userRole);

       System.out.println(user.getPassword());
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());

        return this.userService.createUser(user,roles);
    }

    @GetMapping("/")

    public List<User> listUser(){
        List<User> list=this.userService.list();
        return list;
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username)
    {
        return this.userService.getUser(username);
    }
    //delete user by id
    @DeleteMapping("/{userId}")
    public void deleteuser(@PathVariable("userId")Long userId)
    {
        this.userService.deleteUser(userId);
    }
    //update user by id


}
