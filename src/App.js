import { useEffect } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./components/MainPage/MainPage";
import { observer } from "mobx-react-lite";
import countries from "./store/countries";
import cases from "./store/cases";

const App = () => {
  return <Layout>{<MainPage />}</Layout>;
};

export default observer(App);
