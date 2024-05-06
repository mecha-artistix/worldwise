import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  console.log(country);
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country}</span>
    </li>
  );
}

export default CountryItem;
