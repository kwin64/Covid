import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import countries from "../../store/countries";
import "./Countries.scss";

export const Countries = observer((props) => {
  useEffect(() => {
    countries.fetchDataCountries();
  }, []);
  return (
    <div className="CountriesContainer">
      {countries.dataCountries &&
        countries.dataCountries.map((country) => {
          return (
            <div className="CountryInfo" key={country.id}>
              <div className="CountryInfoCases">{country.cases}</div>
              <div className="CountryInfoCountry">{country.country}</div>
              <img
                className="CountryInfoFlag"
                src={country.countryInfo.flag}
                alt={country.country}
              />
            </div>
          );
        })}
    </div>
  );
});
