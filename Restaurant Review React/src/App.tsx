import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
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

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<Restaurant[]>("http://localhost:8080/restaurant", {
        signal: controller.signal,
      })
      .then((res) => setRestaurants(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  const convertToRestaurant = (data: RestaurantFormData): Restaurant => ({
    id: restaurants.length + 1,
    name: data.name,
    streetAddress: data.streetAddress,
    city: data.city,
    zipCode: data.zipCode,
    cuisine: data.cuisine,
    averageRating: data.averageRating ?? 0, // Default to 0 if undefined
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
      (!selectedRating || e.averageRating === selectedRating) &&
      (!selectedCuisine || e.cuisine === selectedCuisine) &&
      (!selectedCity || e.city === selectedCity)
    );
  });
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <button
        type="button"
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#restaurantModal"
      >
        Add Restaurant
      </button>

      <div
        className="modal fade"
        id="restaurantModal"
        aria-labelledby="restaurantModalLabel"
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
                <RestaurantForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>
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
