import Chart from "../Chart/Chart";
import HorizontalAxis from "../HorizontalAxis/HorizontalAxis";
import VerticalAxis from "../VerticalAxis/VerticalAxis";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="main-container">
      <VerticalAxis />
      <Chart />
      <HorizontalAxis />
    </div>
  );
};

export default Layout;
