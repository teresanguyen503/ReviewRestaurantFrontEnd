import { useState } from "react";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantList from "./components/RestaurantList";
import RatingFilter from "./components/restaurant_filters/RatingFilters";

function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      restaurantName: "aaa",
      streetAddress: "123 sw h",
      city: "Portland",
      zipCode: "97225",
      cuisine: "italian",
      averageRating: 5,
      comment: "good",
    },
    {
      id: 2,
      restaurantName: "bbb",
      streetAddress: "123 sw h",
      city: "Portland",
      zipCode: "97225",
      cuisine: "italian",
      averageRating: 5,
      comment: "good",
    },
    {
      id: 3,
      restaurantName: "ccc",
      streetAddress: "123 sw h",
      city: "Portland",
      zipCode: "97225",
      cuisine: "italian",
      averageRating: 5,
      comment: "good",
    },
  ]);

  // Later, add more filters for city and cuisine. i think cuisine can stay on the front end but city should stay on the backend and be populated from what's in teh data?
  const visibleRestaurants = selectedRating
    ? restaurants.filter((e) => e.averageRating === selectedRating)
    : restaurants;
  return (
    <div>
      <div className="mb-3">
        <RatingFilter onSelectRating={(rating) => setSelectedRating(rating)} />
      </div>
      <RestaurantList
        restaurants={visibleRestaurants}
        onDelete={(id) =>
          setRestaurants(restaurants.filter((e) => e.id !== id))
        }
      />
    </div>
  );
}

export default App;
