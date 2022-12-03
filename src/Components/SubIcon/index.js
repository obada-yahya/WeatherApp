import React from "react";
import sunny from "../../assets/01d.png";
import rain from "../../assets/09d.png";

import style from "./style.module.css";
const SubIcon = ({ status }) => {
  return (
    <div>

      {status === "Sunny" ? <img className={style.img} src={sunny}/>:<img className={style.img} src={rain}/> }
    </div>
  );
};

export default SubIcon;
