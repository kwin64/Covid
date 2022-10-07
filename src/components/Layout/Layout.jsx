import cases from "../../store/cases";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="Container">
      <Header cases={cases} />
      <main>{children}</main>
      <Footer cases={cases} />
    </div>
  );
};
