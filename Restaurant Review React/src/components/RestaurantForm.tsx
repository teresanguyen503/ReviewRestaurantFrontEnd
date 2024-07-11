import { ratings } from "../App";
import { cuisines } from "../App";

const RestaurantForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="restaurant" className="form-label">
          Restaurant Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="street" className="form-label">
          Address (Street Name)
        </label>
        <input id="street" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input id="city" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="zipcode" className="form-label">
          Zip Code
        </label>
        <input id="zipcode" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="cuisine" className="form-label">
          Cuisine Type
        </label>
        <select id="cuisine" className="form-select">
          <option value=""></option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">
          Choose a Rating(1-5)
        </label>
        <select id="rating" className="form-select">
          <option value=""></option>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="mb-3">
        <label htmlFor="comment" className="form-label">
          Comment
        </label>
        <input id="comment" type="text" className="form-control" />
      </div> */}
      <div className="mb-3 input-group">
        <span className="input-group-text">Comment</span>
        <textarea
          className="form-control"
          aria-label="Comment"
          id="comment"
        ></textarea>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RestaurantForm;
