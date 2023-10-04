import style from "./KontaktCard.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

function ShopCard({
  shopName,
  phone,
  oteviraciDoba,
  weekend,
  mapLink,
  image,
  email,
  ic,
  dic,
  adresa,
  mapLinkButton,
}) {
  const iconColor = "#858585";
  return (
    <div className={style.shopContainer}>
      <div className={style.row}>
        <div className={style.shopInfo}>
          <div className={style.leftText}>
            <h1>{shopName}</h1>
            <AiOutlineClockCircle color={iconColor} />
            <p>{oteviraciDoba}</p>
            <p>{weekend}</p>
            <p>Neděle: zavřeno</p>
            <FaMapMarkerAlt color={iconColor} id="jop" />
            <p>{adresa}</p>
            <AiOutlineMail color={iconColor} id="jop" />
            <p>{email}</p>
            <AiOutlinePhone color={iconColor} />
            <p>{phone}</p>
            <br />
            <p>{"IČ: " + ic}</p>
            <p>{"DIČ: " + dic}</p>
          </div>
          <div className={style.rowButton}>
            <a href={`tel:${phone}`} className={style.callButton}>
              Zavolejte nám
            </a>
            <a
              href={mapLinkButton}
              rel="noopener noreferrer"
              title={"Navigovat k nám"}
              target="_blank"
              className={style.navButton}
            >
              Navigovat k nám
            </a>
            <a
              title={"Napište nám ;)"}
              href={`mailto:${email}`}
              className={style.navButton}
            >
              Napište nám
            </a>
          </div>
        </div>
        <div className={style.image}>
          <img src={image} alt="Description of Image" />
        </div>
      </div>
      <iframe src={mapLink} className={style.map} height="450" loading="lazy" />
    </div>
  );
}

export default ShopCard;
