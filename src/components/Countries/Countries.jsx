import { useEffect } from "react";
import countries from "../../store/countries";
import "./Countries.scss";

export const Countries = (props) => {
  useEffect(() => {
    countries.fetchDataCountries();
  }, []);
  return (
      <div className="CountriesContainer">
        
      </div>
  );
}; 
