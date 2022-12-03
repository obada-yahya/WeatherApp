import React from 'react'
import style from "./style.module.css"
import Icon from '../Icon'
const WeatherCard = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.country}>Belgrade, Rs</div>
      <div className={style.icon}><Icon/></div>
      <div className={style.degree}>22&#8451; </div>
      <div className={style.details}>
        <ul>
          <li>Details</li>
          <div className={style.detailsFlex}>
            <li>Feels like <span>22&#8451;</span></li>
            <li>Wind <span>2.06 m/s</span></li>
            <li>Humidity <span>78%</span></li>
            <li>Pressure <span>1015hpa</span></li>
          </div>
        </ul>
      </div>
    </section>
  )
}

export default WeatherCard;