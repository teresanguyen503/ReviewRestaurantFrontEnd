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
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  );
};

export default RatingFilter;
