package com.FitHub.UserService.Dao;

import com.FitHub.UserService.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserDao extends JpaRepository<User,String> {
    User findByUsername(String username);
}
