import { TableInfection } from "../TableInfection/TableInfection";
import { GraphicsInfection } from "../GraphicsInfection/GraphicsInfection";
import "./Statistics.scss";

export const Statistics = (props) => {
  return (
    <div className="StatisticsContainer">
      <TableInfection />
      <GraphicsInfection />
    </div>
  );
};
