import style from "./Footer.module.css";
import Logo from "../../../public/logoArtmode.webp";
import Image from "next/image";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const GoMenu = () => {
    router.push("/");
  };
  const phoneNumber = "+420 601 381 558";
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
              <a
                title="Navigovat k nám"
                target="_blank"
                href="https://www.google.com/maps/place/Zlatnictv%C3%AD+Art+Mode/@50.2109306,15.8262879,18z/data=!4m6!3m5!1s0x470c2b2fb7a319ab:0x406f276ae04c0965!8m2!3d50.2113342!4d15.8257244!16s%2Fg%2F1td_fz8m?entry=ttu"
              >
                Ulice číslo, HK
              </a>{" "}
              <br />
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> <br />
              email@gegaj.corp
            </p>
          </div>
        </div>
        <div className={style.shopAddress}>
          <div>Shop Jr. Gegaj</div>
          <div>
            <p>
              Ulice číslo, HK <br />
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> <br />
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
