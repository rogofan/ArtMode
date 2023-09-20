import style from "./KontaktCard.module.css";
import { FaHome } from "react-icons/fa";

function ShopCard({
  shopName,
  phone,
  oteviraciDoba,
  weekend,
  mapLink,
  image,
  email,
}) {
  return (
    <div className={style.shopContainer}>
      <div className={style.row}>
        <div className={style.shopInfo}>
          <h1>{shopName}</h1>
          <p>{oteviraciDoba}</p>
          <p>{weekend}</p>
          <FaHome />
          <p>Neděle: zavřeno</p>
          <div className={style.rowButton}>
            <a href={`tel:${phone}`} className={style.callButton}>
              Zavolejte nám
            </a>
            <a
              href={mapLink}
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
        <div className={style.image}>{image}</div>
      </div>
      <div className={style.map}>
        <iframe
          src={mapLink}
          className={style.map}
          height="450"
          style={{ border: "0" }}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ShopCard;
