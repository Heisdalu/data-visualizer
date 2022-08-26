import { useContext, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";
import Store from "./store/store-context";

const App = () => {
  const { loading, storeUpdate, error } = useContext(Store);

  useEffect(() => {
    storeUpdate({ type: "LOADING" });
  }, [storeUpdate]);
  return (
    <>
      <Form />
      {!loading && !error && (
        <button className="regenerate">Regenerate data</button>
      )}
      {!loading && !error && <Layout />}
      {loading && <Loading />}
      {!loading && error && <div>Error... Refresh again</div>}
    </>
  );
};

export default App;
