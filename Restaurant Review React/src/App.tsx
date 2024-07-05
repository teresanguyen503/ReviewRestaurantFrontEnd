import { useState } from "react";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import RestaurantForm from "./components/RestaurantForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RestaurantForm />
    </div>
  );
}

export default App;
