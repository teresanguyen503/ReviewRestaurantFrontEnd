import apiClient from "./api-client";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string; // will eventually be an object, with id and name because of a drop down menu
    securityQuestion: string; // will eventually be an object, with id and name because of a drop down menu
    securityAnswer: string;
  }

class UserService {
    // use delete for profile later to delete account 
    deleteUser(id: number) {
        return apiClient.delete("/user/" + id)
    }

    createUser(user: Omit<User, 'id'>) {
        return apiClient.post("/user", user)
    }
}

export default new UserService(); 