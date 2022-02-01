package com.example.Backend;

import com.example.Backend.models.Role;
import com.example.Backend.models.User;
import com.example.Backend.models.UserRole;
import com.example.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {
    @Autowired
	private UserService userService;
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args)  throws Exception  {
		System.out.println("starting code");
//		User user=new User();

//		user.setFirstName("Salah");
//		user.setLastName("Mohamed");
//		user.setUsername("salah0944");
//		user.setPassword("12345");
//		user.setEmail("salah@gmail.com");
//		user.setProfile("default.png");
//
//		Role role1=new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");

//		Set<UserRole> userRoleSet=new HashSet<>();
//		UserRole userRole=new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);

//		userRoleSet.add( userRole);
//		System.out.println("ok");
//		User newUser=this.userService.createUser(user,userRoleSet);
//		System.out.println(newUser.getUsername());


	}
}
