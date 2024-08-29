import { useState } from "react";
import userService, { User } from "../services/user-service";
import CreateAccountForm, { CreateAccountFormData } from "./CreateAccountForm";
import LoginForm, { LoginFormData } from "./LoginForm";
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
          <button
            type="button"
            className="btn btn-primary me-5"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Register
          </button>

          <div
            className="modal fade"
            id="registerModal"
            aria-labelledby="registerModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-5">
                    <CreateAccountForm onSubmit={addUser} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary me-5"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >
            Login
          </button>

          <div
            className="modal fade"
            id="loginModal"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-5">
                    <LoginForm onSubmit={loginUser} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
