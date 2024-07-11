import { date, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ratings } from "../App";
import { cuisines } from "../App";

const schema = z.object({
  restaurant: z.string().min(1, { message: "Restaurant name is required." }),
  street: z.string().min(1, { message: "Street address is required." }),
  city: z.string().min(1, { message: "City is required." }), // might need to change this if it's going to be a drop down menu?
  zipcode: z.string().min(1, { message: "Zip code is required." }),
  cuisine: z.enum(cuisines, {
    errorMap: () => ({ message: "Cuisine type is required." }),
  }),
  rating: z.number().optional(),
  comment: z.string().max(300).optional().or(z.literal("")),
});

type RestaurantFormData = z.infer<typeof schema>;

const RestaurantForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RestaurantFormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="restaurant" className="form-label">
          Restaurant Name
        </label>
        <input
          id="restaurant"
          type="text"
          className="form-control"
          {...register("restaurant")}
        />
        {errors.restaurant && (
          <p className="text-danger">{errors.restaurant.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="street" className="form-label">
          Address (Street Name)
        </label>
        <input
          id="street"
          type="text"
          className="form-control"
          {...register("street")}
        />
        {errors.street && (
          <p className="text-danger">{errors.street.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          id="city"
          type="text"
          className="form-control"
          {...register("city")}
        />
        {errors.city && <p className="text-danger">{errors.city.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="zipcode" className="form-label">
          Zip Code
        </label>
        <input
          id="zipcode"
          type="text"
          className="form-control"
          {...register("zipcode")}
        />
        {errors.zipcode && (
          <p className="text-danger">{errors.zipcode.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="cuisine" className="form-label">
          Cuisine Type
        </label>
        <select {...register("cuisine")} id="cuisine" className="form-select">
          <option value=""></option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
        {errors.cuisine && (
          <p className="text-danger">{errors.cuisine.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">
          Choose a Rating(1-5)
        </label>
        <select {...register("rating")} id="rating" className="form-select">
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
          {...register("comment")}
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
