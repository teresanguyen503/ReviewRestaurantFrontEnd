import apiClient from "./api-client";

export interface Restaurant {
    id: number;
    name: string;
    streetAddress: string;
    city: string;
    zipCode: string;
    cuisine: string; // will eventually be an object, with id and name because of a drop down menu
    averageRating: number; // will eventually be an object, with id and name because of a drop down menu
    comment: string;
  }

class RestaurantService {
    getAllRestaurants() {
        const controller = new AbortController();
        const request = apiClient.get<Restaurant[]>("/restaurant", {
          signal: controller.signal,
        }); 
        return { request, cancel: () => controller.abort()}
    }

    deleteRestaurant(id: number) {
        return apiClient.delete("/restaurant/" + id)
    }

    createRestaurant(restaurant: Omit<Restaurant, 'id'>) {
        return apiClient.post("/restaurant", restaurant)
    }
}

export default new RestaurantService(); 