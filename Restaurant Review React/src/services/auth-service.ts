import apiClient from "./api-client";

export interface LoginRequest {
    email: string, 
    password: string
  }

export interface LoginResponse {
    // need to add token after i update validation on backend
    // token?: string; 
    message?: string
}

class AuthService {
    login(loginRequest: LoginRequest) {
        const request = apiClient.post<LoginResponse>("/auth/login", loginRequest); 
        return request; 
    } 

    // go back here to add in methods for logout and password reset? 
}   

export default new AuthService(); 