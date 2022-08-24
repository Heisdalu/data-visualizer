import React, { useCallback, useReducer } from "react";
import Store from "./store-context";

const storeReducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "DATA_AVALIABLE") {

    return {
      loading: false,
      v_metrics: action.v_axisTransform.V_metrics,
      x_axis: action.axis_detail.H_axis,
      chartLine: action.v_axisTransform.chartDetail,
    };
  }

  if (action.type === "ERROR") {
    return {
      loading: false,
      v_metrics: [],
      x_axis: [],
      chartLine: [],
    };
  }

  return state;
};

const intialObj = {
  loading: false,
  v_metrics: [],
  x_axis: [],
  chartLine: [],
};

const StoreProvider = ({ children }) => {
  const [storeState, dispatchStoreAction] = useReducer(storeReducer, intialObj);

  const storeUpdateHandler = useCallback((action) => {
    dispatchStoreAction(action);
  }, []);

  const storeContextState = {
    ...storeState,
    storeUpdate: storeUpdateHandler,
  };

  return <Store.Provider value={storeContextState}>{children}</Store.Provider>;
};

export default StoreProvider;
