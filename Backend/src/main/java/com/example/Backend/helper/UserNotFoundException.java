package com.example.Backend.helper;

public class UserNotFoundException extends Exception {
    public UserNotFoundException()
    {
        super("user with this username is already threre in dbtry again with another one");

    }

    public UserNotFoundException(String msg)
    {
        super(msg);
    }
}
