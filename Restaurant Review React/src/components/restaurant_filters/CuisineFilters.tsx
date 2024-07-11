interface Props {
  onSelectCuisine: (cuisine: string) => void;
}

const CuisineFilter = ({ onSelectCuisine }: Props) => {
  const cuisines = [
    "American",
    "Asian",
    "Hispanic",
    "Italian",
    "Mediterranean",
    "Other",
  ];

  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCuisine(event.target.value)}
    >
      <option value="">Showing All Cuisines</option>
      {cuisines.map((cuisine) => (
        <option key={cuisine} value={cuisine}>
          {cuisine}
        </option>
      ))}
    </select>
  );
};

export default CuisineFilter;
