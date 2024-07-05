import { useState } from "react";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantList from "./components/RestaurantList";

function App() {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      restaurantName: "aaa",
      streetAddress: "123 sw h",
      zipCode: "97225",
      cuisine: "italian",
      averageRating: 5,
      comment: "good",
    },
    {
      id: 2,
      restaurantName: "bbb",
      streetAddress: "123 sw h",
      zipCode: "97225",
      cuisine: "italian",
      averageRating: 5,
      comment: "good",
    },
    {
      id: 3,
      restaurantName: "ccc",
      streetAddress: "123 sw h",
      zipCode: "97225",
      cuisine: "italian",
      averageRating: 5,
      comment: "good",
    },
  ]);
  return (
    <div>
      <RestaurantList
        restaurants={restaurants}
        onDelete={(id) =>
          setRestaurants(restaurants.filter((e) => e.id !== id))
        }
      />
    </div>
  );
}

export default App;
