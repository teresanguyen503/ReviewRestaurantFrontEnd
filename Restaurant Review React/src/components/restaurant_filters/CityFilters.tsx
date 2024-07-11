interface Props {
  onSelectCity: (city: string) => void;
}

const CityFilter = ({ onSelectCity }: Props) => {
  const cities = ["Portland", "Tigard", "Beaverton"];

  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCity(event.target.value)}
    >
      <option value="">Showing All Cities</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CityFilter;
