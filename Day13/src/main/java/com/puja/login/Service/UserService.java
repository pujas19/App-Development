package com.puja.login.Service;

import java.util.List;

import com.puja.login.dto.request.UserRequest;
import com.puja.login.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
