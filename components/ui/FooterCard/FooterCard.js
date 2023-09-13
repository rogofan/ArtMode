import React from "react";
import style from "./FooterCard.module.css";

const FooterCard = ({
  name,
  mapLink,
  address,
  phone,
  email,
  navTitle,
  phoneTitle,
  emailTitle,
}) => (
  <div className={style.shopAddress}>
    {name && <div className={style.shopName}>{name}</div>}
    <div className={style.contactInfo}>
      {address && mapLink && (
        <p className={style.address}>
          <a
            title={navTitle || "Navigovat k nám"}
            target="_blank"
            rel="noopener noreferrer"
            href={mapLink}
          >
            {address}
          </a>
        </p>
      )}

      {phone && (
        <p className={style.phone}>
          <a title={phoneTitle || "Zavolejte nám ;)"} href={`tel:${phone}`}>
            {phone}
          </a>
        </p>
      )}

      {email && (
        <p className={style.email}>
          <a title={emailTitle || "Napište nám ;)"} href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      )}
    </div>
  </div>
);

export default FooterCard;
