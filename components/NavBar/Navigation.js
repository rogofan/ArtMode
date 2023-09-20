import NavLinks from "./NavLinks";
import style from "./NavBar.module.css";
import Image from "next/image";
import Logo from "../../public/logoArtmode.webp";
import { useRouter } from "next/router";

function Navigation() {
  const router = useRouter();
  const GoMenu = () => {
    router.push("/");
  };
  return (
    <nav className={style.Navigation}>
      <Image src={Logo} alt="Logo" className={style.Logo} onClick={GoMenu} />
      <NavLinks />
    </nav>
  );
}

export default Navigation;
