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
          <RowContainer imageFirst={true}>
            <Image src={Logo} alt="Logo" className={style.img} />
            <div>
              <h2>Nadpis lorem ipsum1</h2>
              <p>
                Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac,
                erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Duis viverra diam non justo. Etiam
                dui sem, fermentum vitae, sagittis id, malesuada in, quam. Etiam
                posuere lacus quis dolor. Praesent id justo in neque elementum
                ultrices. Nullam dapibus fermentum ipsum. In dapibus augue non
                sapien. Duis viverra diam non justo. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Sed ac dolor sit amet purus malesuada congue.
                Etiam neque.
              </p>
            </div>
          </RowContainer>
          <br />
          <RowContainer imageFirst={false}>
            <Image src={Logo} alt="Logo" className={style.img} />
            <div>
              <h2>Nadpis lorem ipsum2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Nunc tincidunt ante
                vitae massa. Duis pulvinar. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Phasellus rhoncus. Mauris
                suscipit, ligula sit amet pharetra semper, nibh ante cursus
                purus, vel sagittis velit mauris vel metus. Proin pede metus,
                vulputate nec, fermentum fringilla, vehicula vitae, justo. Ut
                tempus purus at lorem. Vivamus luctus egestas leo. Duis viverra
                diam non justo. Integer rutrum, orci vestibulum ullamcorper
                ultricies, lacus quam ultricies odio, vitae placerat pede sem
                sit amet enim. Curabitur vitae diam non enim vestibulum
                interdum. Pellentesque pretium lectus id turpis. Et harum quidem
                rerum facilis est et expedita distinctio. Nam sed tellus id
                magna elementum tincidunt.
              </p>
            </div>
          </RowContainer>
          <br />
        </Card>
      </div>
    </Fragment>
  );
}

export default Homepage;
