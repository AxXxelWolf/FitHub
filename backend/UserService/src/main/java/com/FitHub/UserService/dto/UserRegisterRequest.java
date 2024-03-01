package com.FitHub.UserService.dto;

import jakarta.persistence.Lob;
import lombok.Data;

@Data
public class UserRegisterRequest {

    private String username;
    private String name;
    private String password;
    @Lob
    private byte[] profilePhoto;
}
