import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import cases from "../../store/cases";
import "./Cases.scss";

export const Cases = observer((props) => {
  useEffect(() => {
    cases.fetchCasesData();
  }, []);
  return (
    <div className="CasesContainer">
      <div className="TitleCases">Global Cases</div>
      <div className="ContentCases">{cases.casesData && cases.casesData.cases}</div>
    </div> 
  );
});
