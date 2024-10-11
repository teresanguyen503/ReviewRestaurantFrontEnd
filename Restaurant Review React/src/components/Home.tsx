import { useState } from "react";
import userService, { User } from "../services/user-service";
import CreateAccountForm, { CreateAccountFormData } from "./CreateAccountForm";
import LoginForm, { LoginFormData } from "./LoginForm";
import ModalButton from "./modal/ModalButton";
import authService, {
  LoginRequest,
  LoginResponse,
} from "../services/auth-service";

const Home = () => {
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState([]);

  const [login, setLogin] = useState<LoginResponse[]>([]);

  const addUser = (data: CreateAccountFormData) => {
    const originalUser = [...user];
    setUser([...user, data] as User[]);
    console.log("User data: ", data);

    userService
      .createUser(data)
      .then(({ data: user }) => setUser([user, ...user]))
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  };

  const loginUser = (data: LoginFormData) => {
    const orginalLogin = [...login];
    setLogin([...login, data] as LoginResponse[]);
    console.log("Logged in?: ", data);

    authService
      .login(data)
      .then(({ data: loginResponse }) => {
        setLogin([loginResponse]);
        console.log(loginResponse);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  };
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex gap-3">
          <ModalButton
            buttonText={"Register"}
            className={"btn btn-primary me-5"}
            label={"register"}
            formComponent={CreateAccountForm}
            formProps={{ onSubmit: addUser }}
          />

          <ModalButton
            buttonText={"Login"}
            className={"btn btn-primary me-5"}
            label={"login"}
            formComponent={LoginForm}
            formProps={{ onSubmit: loginUser }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
