import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ratings from "../constants/ratings";
import cuisines from "../constants/cuisines";

const schema = z.object({
  name: z.string().min(1, { message: "Restaurant name is required." }),
  streetAddress: z.string().min(1, { message: "Street address is required." }),
  city: z.string().min(1, { message: "City is required." }), // might need to change this if it's going to be a drop down menu?
  zipCode: z.string().min(1, { message: "Zip code is required." }),
  cuisine: z.enum(cuisines, {
    errorMap: () => ({ message: "Cuisine type is required." }),
  }),
  // rating: z.number().optional(),
  averageRating: z
    .union([z.number(), z.string().transform((val) => parseInt(val, 10))])
    .optional(),

  comment: z.string().max(300).optional().or(z.literal("")),
});

export type RestaurantFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: RestaurantFormData) => void;
}

const RestaurantForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RestaurantFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Restaurant Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="streetAddress" className="form-label">
          Address (Street Name)
        </label>
        <input
          id="streetAddress"
          type="text"
          className="form-control"
          {...register("streetAddress")}
        />
        {errors.streetAddress && (
          <p className="text-danger">{errors.streetAddress.message}</p>
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
        <label htmlFor="zipCode" className="form-label">
          Zip Code
        </label>
        <input
          id="zipCode"
          type="text"
          className="form-control"
          {...register("zipCode")}
        />
        {errors.zipCode && (
          <p className="text-danger">{errors.zipCode.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="cuisine" className="form-label">
          Cuisine Type
        </label>
        <select {...register("cuisine")} id="cuisine" className="form-select">
          <option value="0"></option>
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
        <label htmlFor="averageRating" className="form-label">
          Choose a Rating(1-5)
        </label>
        <select
          {...register("averageRating")}
          id="averageRating"
          className="form-select"
          onChange={(event) => parseInt(event.target.value)}
        >
          <option value=""></option>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>
              {rating}
            </option>
          ))}
        </select>
      </div>
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
