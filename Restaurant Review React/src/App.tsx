import { useState } from "react";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;
