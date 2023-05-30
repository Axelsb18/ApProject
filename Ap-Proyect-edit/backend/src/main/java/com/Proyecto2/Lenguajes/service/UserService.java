package com.Proyecto2.Lenguajes.service;

import com.Proyecto2.Lenguajes.dto.LoginDTO;
import com.Proyecto2.Lenguajes.dto.UserDTO;
import com.Proyecto2.Lenguajes.models.LoginMesage;

public interface UserService {
    String addUser(UserDTO userDTO);

    LoginMesage loginUser(LoginDTO loginDTO);
}
