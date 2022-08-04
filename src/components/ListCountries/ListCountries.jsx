import { Cases } from "../Cases/Cases";
import { Countries } from "../Countries/Countries";
import { Search } from "../Search/Search";
import "./ListCountries.scss";

export const ListCountries = (props) => {
  return (
    <div className="ListCountriesContainer">
      <Cases />
      {/* <Search/> */}
      <Countries />
    </div>
  );
};
