export interface Restaurant {
  id: number;
  restaurant: string;
  street: string;
  city: string;
  zipcode: string;
  cuisine: string; // will eventually be an object, with id and name because of a drop down menu
  rating: number; // will eventually be an object, with id and name because of a drop down menu
  comment: string;
}

interface Props {
  restaurants: Restaurant[];
  onDelete: (id: number) => void;
}

const RestaurantList = ({ restaurants, onDelete }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Restaurant Name</th>
          <th>Street Address</th>
          <th>City</th>
          <th>Zip Code</th>
          <th>Cuisine</th>
          <th>Average Rating</th>
          <th>Comment(s)</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.restaurant}</td>
            <td>{restaurant.street}</td>
            <td>{restaurant.city}</td>
            <td>{restaurant.zipcode}</td>
            <td>{restaurant.cuisine}</td>
            <td>{restaurant.rating}</td>
            {/* Need to go back here to accumulate average rating */}
            <td>{restaurant.comment}</td>
            {/* Need to go back here to grab comments to put into a new page */}
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(restaurant.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestaurantList;
