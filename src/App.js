import { observer } from "mobx-react-lite";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./components/MainPage/MainPage";

const App = () => {
  return <Layout>{<MainPage />}</Layout>;
};

export default observer(App);
