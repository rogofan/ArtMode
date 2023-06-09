import style from "./Homepage.module.css";
import { Fragment } from "react";
import Card from "../ui/Card";
import img from "../../public/logoArtmode.webp";
// import videoUvod from "../../public/testVideo.mp4";
function Homepage() {
  return (
    <Fragment>
      {/* Video zde */}
      <div className={style.topSpace}>
        <Card>
          <h1> Zlatnictví ArtMode</h1>
        </Card>
      </div>
    </Fragment>
  );
}

export default Homepage;
