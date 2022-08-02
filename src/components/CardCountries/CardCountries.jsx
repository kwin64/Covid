import { Card } from "../Card/Card";
import { OptionsCard } from "../OptionsCard/OptionsCard";
import "./CardCountries.scss";

export const CardCountries = (props) => {
  return (
    <div className="CardCountriesContainer">
      <OptionsCard />
      <Card />
    </div>
  );
};
