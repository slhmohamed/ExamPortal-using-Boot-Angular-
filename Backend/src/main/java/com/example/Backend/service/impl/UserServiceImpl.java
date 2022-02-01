package com.example.Backend.service.impl;

import com.example.Backend.helper.UserFoundException;
import com.example.Backend.helper.UserNotFoundException;
import com.example.Backend.models.User;
import com.example.Backend.models.UserRole;
import com.example.Backend.repo.RoleRepository;
import com.example.Backend.repo.UserRepository;
import com.example.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
       User local=this.userRepository.findByUsername(user.getUsername());
       if(local!=null){

           System.out.println("User is already exist !!");
           throw new UserFoundException();
       }
       else
       {
           //create user
            for(UserRole ur:userRoles){
                roleRepository.save(ur.getRole());
            }
            user.getUserRoles().addAll(userRoles);
          local=  this.userRepository.save(user);



       }
        return local;
    }

    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public List<User> list() {
        return this.userRepository.findAll();
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }
}
