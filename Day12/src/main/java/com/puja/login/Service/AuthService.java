package com.puja.login.Service;

import com.puja.login.dto.request.AuthenticationResponse;
import com.puja.login.dto.request.RegisterRequest;
import com.puja.login.dto.response.AuthenticationRequest;



public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
