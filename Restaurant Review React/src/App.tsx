import { useState } from "react";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantList from "./components/RestaurantList";
import RatingFilter from "./components/restaurant_filters/RatingFilters";
import CuisineFilter from "./components/restaurant_filters/CuisineFilters";
import CityFilter from "./components/restaurant_filters/CityFilters";

export const cuisines = [
  "American",
  "Asian",
  "Hispanic",
  "Italian",
  "Mediterranean",
  "Other",
];
export const ratings = [1, 2, 3, 4, 5];

function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      restaurantName: "aaa",
      streetAddress: "123 sw h",
      city: "Tigard",
      zipCode: "97225",
      cuisine: "Asian",
      averageRating: 5,
      comment: "good",
    },
    {
      id: 2,
      restaurantName: "bbb",
      streetAddress: "123 sw h",
      city: "Beaverton",
      zipCode: "97225",
      cuisine: "Asian",
      averageRating: 5,
      comment: "good",
    },
    {
      id: 3,
      restaurantName: "ccc",
      streetAddress: "123 sw h",
      city: "Portland",
      zipCode: "97225",
      cuisine: "Italian",
      averageRating: 5,
      comment: "good",
    },
  ]);

  // Later, add more filters for city and cuisine. i think cuisine can stay on the front end but city should stay on the backend and be populated from what's in teh data?
  const visibleRestaurants = restaurants.filter((e) => {
    return (
      (!selectedRating || e.averageRating === selectedRating) &&
      (!selectedCuisine || e.cuisine === selectedCuisine) &&
      (!selectedCity || e.city === selectedCity)
    );
  });
  return (
    <div>
      <div className="mb-3">
        <RatingFilter onSelectRating={(rating) => setSelectedRating(rating)} />
      </div>
      <div className="mb-3">
        <CuisineFilter
          onSelectCuisine={(cuisine) => setSelectedCuisine(cuisine)}
        />
      </div>
      <div className="mb-3">
        <CityFilter onSelectCity={(city) => setSelectedCity(city)} />
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
