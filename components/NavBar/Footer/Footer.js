import style from "./Footer.module.css";
import Logo from "../../../public/logoArtmode.webp";
import Image from "next/image";
import { useRouter } from "next/router";

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
        <div className={style.shopAddress}>
          <div>Shop Daddy Gegaj</div>
          <div>
            <p>
              Ulice číslo, HK <br />
              +420 XXX XXX XXX <br />
              email@gegaj.corp
            </p>
          </div>
        </div>
        <div className={style.shopAddress}>
          <div>Shop Jr. Gegaj</div>
          <div>
            <p>
              Ulice číslo, HK <br />
              +420 XXX XXX XXX <br />
              email@gegaj.corp
            </p>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p>&copy; 2023 ArtMode All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
