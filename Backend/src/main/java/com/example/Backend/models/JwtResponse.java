package com.example.Backend.models;

public class JwtResponse {
    String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public JwtResponse() {
    }

    public JwtResponse(String token) {
        System.out.println(token);
        this.token = token;
    }
}
