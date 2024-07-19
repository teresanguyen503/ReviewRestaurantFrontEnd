import { useState } from "react";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantList from "./components/RestaurantList";
import RatingFilter from "./components/restaurant_filters/RatingFilters";
import CuisineFilter from "./components/restaurant_filters/CuisineFilters";
import CityFilter from "./components/restaurant_filters/CityFilters";
import { Restaurant } from "./components/RestaurantList";
import { RestaurantFormData } from "./components/RestaurantForm";

function App() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      restaurant: "aaa",
      street: "123 sw h",
      city: "Tigard",
      zipcode: "97225",
      cuisine: "Asian",
      rating: 5,
      comment: "good",
    },
    {
      id: 2,
      restaurant: "bbb",
      street: "123 sw h",
      city: "Beaverton",
      zipcode: "97225",
      cuisine: "Asian",
      rating: 5,
      comment: "good",
    },
    {
      id: 3,
      restaurant: "ccc",
      street: "123 sw h",
      city: "Portland",
      zipcode: "97225",
      cuisine: "Italian",
      rating: 5,
      comment: "good",
    },
  ]);

  const convertToRestaurant = (data: RestaurantFormData): Restaurant => ({
    id: restaurants.length + 1,
    restaurant: data.restaurant,
    street: data.street,
    city: data.city,
    zipcode: data.zipcode,
    cuisine: data.cuisine,
    rating: data.rating ?? 0, // Default to 0 if undefined
    comment: data.comment ?? "", // Default to empty string if undefined
  });

  const handleFormSubmit = (data: RestaurantFormData) => {
    const newRestaurant = convertToRestaurant(data);
    setRestaurants([...restaurants, newRestaurant]);
    console.log("Form data:", newRestaurant);
  };

  // Later, add more filters for city and cuisine. i think cuisine can stay on the front end but city should stay on the backend and be populated from what's in teh data?
  const visibleRestaurants = restaurants.filter((e) => {
    return (
      (!selectedRating || e.rating === selectedRating) &&
      (!selectedCuisine || e.cuisine === selectedCuisine) &&
      (!selectedCity || e.city === selectedCity)
    );
  });
  return (
    <div>
      <div className="mb-5">
        <RestaurantForm onSubmit={handleFormSubmit} />
      </div>
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
