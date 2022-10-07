import { Cases } from "../Cases/Cases";
import { Countries } from "../Countries/Countries";
import "./ListCountries.scss";

export const ListCountries = ({currentCountry}) => {
  return (
    <div className="ListCountriesContainer">
      <Cases />
      <Countries currentCountry={currentCountry}/>
    </div>
  );
};
