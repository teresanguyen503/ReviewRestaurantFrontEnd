import ratings from "../../constants/ratings";
interface Props {
  onSelectRating: (rating: number) => void;
}

const RatingFilter = ({ onSelectRating }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectRating(parseInt(event.target.value))}
    >
      <option value="">Rate between 1-5</option>
      {ratings.map((rating) => (
        <option key={rating} value={rating}>
          {rating}
        </option>
      ))}
    </select>
  );
};

export default RatingFilter;
