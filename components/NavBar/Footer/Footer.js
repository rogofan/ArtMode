import style from "./Footer.module.css";
import Logo from "../../../public/logoArtmode.webp";
import Image from "next/image";
import { useRouter } from "next/router";
import FooterCard from "../../ui/FooterCard/FooterCard";
import { mapLinks } from "../../../Data/Maplinks";

function Footer() {
  const router = useRouter();
  const GoMenu = () => {
    router.push("/");
  };
  return (
    <footer className={style.footer}>
      <div className={style.footerRow}>
        <div>
          <Image
            src={Logo}
            alt="Logo"
            className={style.logo}
            onClick={GoMenu}
          />
        </div>
        <FooterCard
          name={"Obchod Daddy "}
          address={"Masarykáč u eggsitu"}
          mapLink={mapLinks.Senior.button}
          phone={"724277822"}
          email={"email@gegaj.corp"}
        />
        <FooterCard
          name={"Obchod Jr. Gegaj"}
          mapLink={mapLinks.Junior.button}
          phone={"+420 601 381 558"}
          address={"Baťkovo náměstí"}
          email={"jr@gegaj.corp"}
        />
      </div>
      <div className={style.footerBottom}>
        <p>&copy; 2023 ArtMode All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
