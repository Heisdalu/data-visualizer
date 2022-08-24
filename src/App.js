import "./App.css";
import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";

const App = () => {
  return (
    <>
      <button className="regenerate">Regenerate data</button>
      <Layout />
      {/* <Loading /> */}
    </>
  );
};

export default App;
