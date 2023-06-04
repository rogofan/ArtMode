import style from "./Servicespage.module.css";
import { Fragment } from "react";
import Card from "../ui/Card";
function Services() {
  return (
    <Fragment>
      <div className={style.topSpace}>
        <Card>
          <h1>Servisní služyby</h1>
        </Card>
      </div>
    </Fragment>
  );
}

export default Services;
