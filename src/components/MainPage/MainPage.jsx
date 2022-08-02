import "./MainPage.scss";
import { ListCountries } from "../ListCountries/ListCountries";
import { CardCountries } from "../CardCountries/CardCountries";
import { Statistics } from "../Statistics/Statistics";

export const MainPage = (props) => {
  return (
    <div className="MainPageContainer">
      <ListCountries />
      <CardCountries />
      <Statistics />
    </div>
  );
};
