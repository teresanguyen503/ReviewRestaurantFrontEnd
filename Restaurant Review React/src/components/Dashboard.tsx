import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import restaurantService, { Restaurant } from "../services/restaurant-service";
import RestaurantForm, { RestaurantFormData } from "./RestaurantForm";
import RestaurantList from "./RestaurantList";
import CityFilter from "./restaurant_filters/CityFilters";
import CuisineFilter from "./restaurant_filters/CuisineFilters";
import RatingFilter from "./restaurant_filters/RatingFilters";

const Dashboard = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = restaurantService.getAllRestaurants();
    request
      .then((res) => {
        setRestaurants(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    // .finally doesn't working with strict mode
    // .finally(() => {
    //   setIsLoading(false);
    // });

    return () => cancel();
  }, []);

  const addRestaurant = (data: RestaurantFormData) => {
    const originalRestaurants = [...restaurants];
    const newRestaurant = convertToRestaurant(data);
    setRestaurants([...restaurants, newRestaurant] as Restaurant[]);
    console.log("Form data:", newRestaurant);

    restaurantService
      .createRestaurant(newRestaurant)
      .then(({ data: restaurant }) =>
        setRestaurants([restaurant, ...restaurants])
      )
      .catch((err) => {
        setError(err.message);
        setRestaurants(originalRestaurants);
      });
  };

  const deleteRestaurant = (id: number) => {
    const originalRestaurants = [...restaurants];
    setRestaurants(restaurants.filter((r) => r.id !== id));

    restaurantService.deleteRestaurant(id).catch((err) => {
      setError(err.message);
      setRestaurants(originalRestaurants);
    });
  };

  const convertToRestaurant = (
    data: RestaurantFormData
  ): Omit<Restaurant, "id"> => ({
    name: data.name,
    streetAddress: data.streetAddress,
    city: data.city,
    zipCode: data.zipCode,
    cuisine: data.cuisine,
    averageRating: data.averageRating ?? 0, // Default to 0 if undefined
    comment: data.comment ?? "", // Default to empty string if undefined
  });

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
                <RestaurantForm onSubmit={addRestaurant} />
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
      {isLoading && <div className="spinner-border"></div>}
      <RestaurantList
        restaurants={visibleRestaurants}
        onDelete={deleteRestaurant}
      />
    </div>
  );
};

export default Dashboard;
