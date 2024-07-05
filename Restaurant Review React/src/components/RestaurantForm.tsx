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
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RestaurantForm;
