import { observer } from "mobx-react-lite";
import { useEffect, useMemo, useState } from "react";
import countries from "../../store/countries";
import "./Search.scss";

export const Search = observer((props) => {
  const [inputValue, setInputValue] = useState(null);

  const searchCountriesHandler = useMemo(() => {
    if (!inputValue) {
      return countries.dataCountries;
    }
    return countries.dataCountries.filter((country) =>
      country.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [countries.dataCountries,inputValue]);

  console.log(searchCountriesHandler);

  return (
    <input
      className="Input"
      type="text"
      onChange={(e) => setInputValue(e.currentTarget.value)}
      placeholder="Find country"
      value={inputValue}
    />
  );
});
