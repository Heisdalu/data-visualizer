import { useContext } from "react";
import Store from "../store/store-context";
import "./Chart.css";

const Chart = () => {
  const { chartLine } = useContext(Store);

  const chart = chartLine.map((el, i) => (
    <div className="line" style={{ height: `${el.Ypercent}%`}} key={i}>
      <span>{el.V}</span>
    </div>
  ));

  return (
    <div className="histogram">
    {chart}
    </div>
  );
};

export default Chart;
