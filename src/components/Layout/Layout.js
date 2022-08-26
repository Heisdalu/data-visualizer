import { useCallback, useContext, useEffect } from "react";
import Chart from "../Chart/Chart";
import HorizontalAxis from "../HorizontalAxis/HorizontalAxis";
import VerticalAxis from "../VerticalAxis/VerticalAxis";
import axios from "axios";
import "./Layout.css";
import { transformInput } from "../../lib/transformInput.js";
import { transformVaxis } from "../../lib/transformVaxis";
import Store from "../../store/store-context";

const Layout = () => {
  const { storeUpdate, userObj } = useContext(Store);

  const func = useCallback(async () => {

    try {
      const request = await axios.get(
        `https://www.random.org/integers/?num=300&min=${userObj.min}&max=${userObj.max}&col=1&base=10&format=plain&rnd=new`
      );

      const axis_detail = transformInput(request.data);
      const v_axisTransform = transformVaxis(axis_detail.V_arr);

      storeUpdate({
        type: "DATA_AVALIABLE",
        axis_detail,
        v_axisTransform,
      });
    } catch (err) {
      storeUpdate({ type: "ERROR" });
    }
  }, [storeUpdate, userObj]);

  useEffect(() => {
    func();
  }, [func]);

  return (
    <>
      <div className="main-container">
        <VerticalAxis />
        <Chart />
        <HorizontalAxis />
      </div>
    </>
  );
};

export default Layout;
