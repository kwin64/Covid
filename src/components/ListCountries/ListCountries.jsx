import { Cases } from "../Cases/Cases";
import { Countries } from "../Countries/Countries";
import "./ListCountries.scss";

export const ListCountries = (props) => {
  return (
    <div className="ListCountriesContainer">
      <Cases />
      <Countries />
    </div>
  );
};
