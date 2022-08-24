import { useContext, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";
import Store from "./components/store/store-context";

const App = () => {
  const {loading, storeUpdate} = useContext(Store)

  useEffect(() => {
      storeUpdate({ type: "LOADING" });
      
    }, [storeUpdate])
  return (
    <>
      {!loading && <button className="regenerate">Regenerate data</button>}
      {!loading && <Layout />}
      {loading && <Loading />}
    </>
  );
};

export default App;
