import { observer } from "mobx-react-lite";
import { Fragment, useEffect, useMemo, useState } from "react";
import countries from "../../store/countries";
import "./Countries.scss";

export const Countries = observer((props) => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    countries.fetchDataCountries();
  }, []);

  const filteredCountries = useMemo(() => {
    if (!inputValue) {
      return countries.dataCountries;
    }
    return countries.dataCountries.filter((country) =>
      country.country.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [countries.dataCountries, inputValue]);

  const currentCountry = (country) => {
    console.log(country);
  };
  return (
    <div className="ContainerCountries">
      <input
        className="Input"
        type="text"
        onChange={(e) => setInputValue(e.currentTarget.value)}
        placeholder="Find country"
        value={inputValue}
      />
      <div className="ItemsCountries">
        {countries.dataCountries &&
          filteredCountries.map((country) => {
            return (
              <div
                className="CountryInfo"
                key={country.id}
                onClick={() => currentCountry(country.country)}
              >
                <div className="CountryInfoCases">{country.cases}</div>
                <div className="CountryInfo">{country.country}</div>
                <img
                  className="CountryFlag"
                  src={country.countryInfo.flag}
                  alt={country.country}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
});
