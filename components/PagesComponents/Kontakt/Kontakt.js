import style from "./Kontakt.module.css";
import { Fragment } from "react";
import Card from "../../ui/Card/Card";
import ShopCard from "./KontaktCard";
import { mapLinks } from "../../../Data/Maplinks";

function Kontakt() {
  return (
    <Fragment>
      <div className={style.topSpace}>
        <Card>
          <ShopCard
            adresa={"Švehlova 504/16, 500 02 Hradec Králové 2"}
            email={"nrec@gegaj.cz"}
            shopName={"Senior u eggsitu"}
            phone={"+420 999 888 777"}
            mapLink={mapLinks.Senior.mapa}
            mapLinkButton={mapLinks.Senior.button}
            oteviraciDoba={"Pondělí – pátek 9:00 – 18:00"}
            weekend={"Sobota 9:00 - 12:00"}
            image="/images/oldShopKontakFoto.PNG"
            ic={"1564857"}
            dic={"CZ1564857"}
          />
          <ShopCard
            adresa={"Čelakovského 609/11, 500 02 Hradec Králové 2"}
            shopName={"Junior Bťkovo náměstí"}
            email={"nrec@gegaj.cz"}
            phone={"+420 999 888 777"}
            mapLink={mapLinks.Junior.mapa}
            mapLinkButton={mapLinks.Junior.button}
            oteviraciDoba={"Pondělí – pátek 9:00 – 18:00"}
            weekend={"Sobota 9:00 - 12:00"}
            image="/images/imgNextTest.jpg"
            ic={"1564857"}
            dic={"CZ1564857"}
          />
        </Card>
      </div>
    </Fragment>
  );
}

export default Kontakt;
