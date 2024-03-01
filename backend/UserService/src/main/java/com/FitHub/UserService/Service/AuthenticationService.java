package com.FitHub.UserService.Service;

import com.FitHub.UserService.Dao.UserDao;
import com.FitHub.UserService.Models.User;
import com.FitHub.UserService.dto.UserLoginRequest;
import com.FitHub.UserService.dto.UserRegisterRequest;
import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserDao userDao;
    private final PasswordEncoder passwordEncoder;


    public boolean authenticateUser(UserLoginRequest request) {
        return authenticate(request.getUsername(),request.getPassword());
    }

    public void registerUser(UserRegisterRequest userRegisterRequest) {
        var user = User.builder()
                .name(userRegisterRequest.getName())
                .username(userRegisterRequest.getUsername())
                .password(passwordEncoder.encode(userRegisterRequest.getPassword()))
                .build();
        userDao.save(user);
    }

    public boolean authenticate(String username, String password) {
        User user = userDao.findByUsername(username);

        if (user!=null) {
            System.out.println(user.getName());
            return passwordEncoder.matches(password, user.getPassword());
        }

        return false;
    }
}
