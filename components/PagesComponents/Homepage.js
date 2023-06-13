import style from "./Homepage.module.css";
import { Fragment } from "react";
import Card from "../ui/Card";
import videoA from "../../Assets/testVideo.mp4";
import RowContainer from "../ui/RowContent/CardTextImg";
import Image from "next/image";
import Logo from "../../public/logoArtmode.webp";

function Homepage() {
  return (
    <Fragment>
      <video autoPlay muted loop className={style.video}>
        <source src={videoA} type="video/mp4" />
      </video>
      <div className={style.topSpace}>
        <Card>
          <h1 className={style.alignZero}> Zlatnictví ArtMode</h1>
          <RowContainer>
            <Image src={Logo} alt="Logo" className={style.img} />
            <div>
              <h2>Nadpis lorem ipsum</h2>
              <p>
                Lorem ipsum pivo Lorem ipsum pivo Lorem ipsum pivoLorem ipsum
                pivo Lorem ipsum pivoLorem ipsum pivo
              </p>
            </div>
          </RowContainer>
        </Card>
      </div>
    </Fragment>
  );
}

export default Homepage;
