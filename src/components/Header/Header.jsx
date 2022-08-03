import { observer } from "mobx-react-lite";
import "./Header.scss";
import cases from "../../store/cases";

export const Header = observer(() => {
  return (
    <div className="HeaderContainer">
      <div className="HeaderTitle">COVID-19 Dashboard</div>
      <div className="Card">
        Coronavirus Cases
        <div>+ {cases.casesData && cases.casesData.todayCases}</div>
        <div>
          {((cases.casesData && cases.casesData.cases) / 1000000).toFixed(2)}m total
        </div>
      </div>
      <div className="Card">
        Recovered
        <div>+ {cases.casesData && cases.casesData.todayRecovered}</div>
        <div>
          {((cases.casesData && cases.casesData.recovered) / 1000000).toFixed(2)}m total
        </div>
      </div>
      <div className="Card">
        Deaths
        <div>+ {cases.casesData && cases.casesData.todayDeaths}</div>
        <div>
          {((cases.casesData && cases.casesData.deaths) / 1000000).toFixed(2)}m total
        </div>
      </div>
    </div>
  );
});
