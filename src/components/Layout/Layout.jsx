import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainPage } from "../MainPage/MainPage";
import "./Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="Container">
      <Header />
      <MainPage/>
      <Footer />
    </div>
  );
};
