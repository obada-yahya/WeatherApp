import style from "./style.module.css"
import React from 'react'
import SubIcon from '../SubIcon'
const DayWeather = ({status,day,degree,mood}) => {
  console.log(status);
  return (
    <section className={style.container}>
        <div>
            <div><SubIcon status={status}/></div>
            <div>{day}</div>
        </div>
        <div>
            <div>{mood}</div>
            <div>{degree + "℃ /" + degree + "℃"}</div>
        </div>
    </section>
  )
}

export default DayWeather