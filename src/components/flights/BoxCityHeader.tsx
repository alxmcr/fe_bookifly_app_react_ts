import { LoadingStates } from '../../@types/service/enumsService';
import { useLocalCity } from '../../hooks/cities/local/useCity';

type Props = {
  cityId: number;
};

export default function BoxCityHeader({ cityId = 0 }: Props) {
  const { city, errorCity, statusCity } = useLocalCity(cityId);

  if (LoadingStates.PENDING === statusCity) {
    return <p>Loading city...</p>;
  }

  if (LoadingStates.ERROR === statusCity && errorCity) {
    return <p>{errorCity.message}</p>;
  }

  if (LoadingStates.SUCCESS === statusCity && city) {
    return (
      <div>
        <span className="text-light-50">{city.name}</span>
        <span className="text-riptide-200">{city.country}</span>
      </div>
    );
  }

  return null;
}
