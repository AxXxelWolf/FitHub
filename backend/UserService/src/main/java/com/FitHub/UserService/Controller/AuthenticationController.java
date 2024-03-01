package com.FitHub.UserService.Controller;

import com.FitHub.UserService.Service.AuthenticationService;
import com.FitHub.UserService.dto.UserLoginRequest;
import com.FitHub.UserService.dto.UserRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginRequest userLoginRequest){System.out.println("Login");
        boolean isAuthenticated = authenticationService.authenticateUser(userLoginRequest);

        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
        }
    }
    @PostMapping("/register")
    public ResponseEntity<?> loginUser(@RequestBody UserRegisterRequest userRegisterRequest){
        System.out.println("Register");
        authenticationService.registerUser(userRegisterRequest);
        return ResponseEntity.ok("ok");
    }
}
