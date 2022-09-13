import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { MainPage } from "../MainPage/MainPage";
import "./Layout.scss";

export const Layout = ({ children }) => {

//filter data in header and cases

  return (
    <div className="Container">
      <Header />
      <MainPage/>
      <Footer />
    </div>
  );
};
