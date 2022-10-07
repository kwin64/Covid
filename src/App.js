import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import cases from "./store/cases";
import countries from "./store/countries";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./components/MainPage/MainPage";

const App = () => {
  useEffect(() => {
    countries.fetchDataCountries();
  }, []);
  useEffect(() => {
    cases.fetchCasesData();
  }, []);

  const currentCountry = (country) => {
    countries.fetchDataCurrentCountry(country);
  };
  // if (countries.loading) return <>Loading...</>;

  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};

export default observer(App);
