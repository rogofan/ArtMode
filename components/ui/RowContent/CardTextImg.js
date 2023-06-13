import style from "./CardTextImg.module.css";
import Image from "next/image";

function RowContentCard(props) {
  const image = props.children.find((child) => child.type === Image);
  const content = props.children.filter((child) => child.type !== Image);

  return (
    <div className={style.card}>
      <div className={style.image}>{image}</div>
      <div className={style.content}>{content}</div>
    </div>
  );
}

export default RowContentCard;
