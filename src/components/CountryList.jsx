import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";
function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your city by clicking on a city on the map" />;

  const countries = cities.reduce((arr, city) => {
    // check if array alrady have the current city
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((city) => (
          <CountryItem country={city.country} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
