import { LoadingStates } from '../../../@types/service/enumsService';
import { useLocalCities } from '../../../hooks/cities/local/useCities';

type Props = {
  defaultOptionLabel: string;
  nameSelectElement: string;
  htmlFor: string;
  citySelectedId: string;
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectCities({
  defaultOptionLabel = '',
  nameSelectElement = '',
  htmlFor = '',
  citySelectedId = '',
  onChange,
}: Props) {
  const { cities, statusCities, errorCities } = useLocalCities();

  if (LoadingStates.PENDING === statusCities) {
    return <p className="text-riptide-200">Loading cities...</p>;
  }

  if (LoadingStates.ERROR === statusCities && errorCities) {
    return <p className="text-riptide-200">{errorCities.message}</p>;
  }

  return (
    <select
      name={nameSelectElement}
      value={citySelectedId}
      id={htmlFor}
      className="h-[40px] rounded-lg bg-riptide-50"
      onChange={onChange}
      required
    >
      <option value="">{defaultOptionLabel}</option>
      {cities.map((city) => (
        <option key={city.cityId} className="p-2" value={city.cityId}>
          {city.name}, {city.country}
        </option>
      ))}
    </select>
  );
}
