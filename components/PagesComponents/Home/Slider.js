import Slider from "react-slick";
import { slidePeople } from "../../../Data/SlidePeople";
import styles from "./TestimonialSlider.module.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  speed: 1500, //smooth behavior of autoplay
  autoplaySpeed: 3000, //time for autoplay
  responsive: [
    {
      breakpoint: 600,
      settings: {
        autoplay: true, // Enable autoplay
        speed: 1500, //smooth behavior of autoplay
        autoplaySpeed: 3000, //time for autoplay
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        autoplay: true, // Enable autoplay
        speed: 1500, //smooth behavior of autoplay
        autoplaySpeed: 3000, //time for autoplay
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

function TestimonialSlider() {
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {slidePeople.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.roundedImage}
              />
            </div>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.description}>{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default TestimonialSlider;
