import "./MainPage.scss";
import { ListCountries } from "../ListCountries/ListCountries";
import { CardCountries } from "../CardCountries/CardCountries";
import { Statistics } from "../Statistics/Statistics";

export const MainPage = ({currentCountry}) => {
  return (
    <div className="MainPageContainer">
      <ListCountries currentCountry={currentCountry}/>
      <CardCountries />
      <Statistics />
    </div>
  );
};
