import style from "./Kontakt.module.css";
import { Fragment } from "react";
import Card from "../ui/Card";

function Services() {
  return (
    <Fragment>
      <div className={style.topSpace}>
        <Card>
          <h1>Kontakt page</h1>
          <iframe
            /* najdu si co potřeba > sdílet > vložení mapy > copy HTML */
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.3147966730157!2d15.823149476886037!3d50.21133760455122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c2b2fb7a319ab%3A0x406f276ae04c0965!2sZlatnictv%C3%AD%20Art%20Mode!5e0!3m2!1scs!2scz!4v1687086683673!5m2!1scs!2scz"
            className={style.map}
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Card>
      </div>
    </Fragment>
  );
}

export default Services;
