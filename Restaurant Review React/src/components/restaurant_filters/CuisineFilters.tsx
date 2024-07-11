import { cuisines } from "../../App";
interface Props {
  onSelectCuisine: (cuisine: string) => void;
}

const CuisineFilter = ({ onSelectCuisine }: Props) => {
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
