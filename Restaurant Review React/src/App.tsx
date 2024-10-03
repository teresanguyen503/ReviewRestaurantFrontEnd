import { useState } from "react";
import createUserService, { User } from "./services/user-service";
import CreateAccountForm, {
  CreateAccountFormData,
} from "./components/CreateAccountForm";
import Home from "./components/Home";

function App() {
  // const [user, setUser] = useState<User[]>([]);
  // const [error, setError] = useState([]);

  // const addUser = (data: CreateAccountFormData) => {
  //   const originalUser = [...user];
  //   setUser([...user, data] as User[]);
  //   console.log("User data: ", data);

  //   createUserService
  //     .createUser(data)
  //     .then(({ data: user }) => setUser([user, ...user]))
  //     .catch((err) => {
  //       setError(err.message);
  //       console.log(err.message);
  //     });
  // };
  return (
    <div>
      {/* <CreateAccountForm onSubmit={addUser} /> */}
      <Home />
    </div>
  );
}

export default App;
