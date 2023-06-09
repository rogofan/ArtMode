import style from "./Layout.module.css";
import Header from "./NavBar";
import Footer from "../NavBar/Footer/Footer";
function Layout(props) {
  return (
    <div>
      <Header />
      <main className={style.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
