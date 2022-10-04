import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './linux.css'

const Linux = (props) => {
  return (
    <div className="linux-container">
      <Helmet>
        <title>Перакладальня</title>
        <meta
          name="description"
          content="Здесь можна знайсці пераклады на розныя гульні на беларускую мову!"
        />
        <meta property="og:title" content="Перакладальня" />
        <meta
          property="og:description"
          content="Здесь можна знайсці пераклады на розныя гульні на беларускую мову!"
        />
      </Helmet>
      <Header></Header>
      <div className="linux-hero">
        <div className="linux-container1">
          <h1 className="linux-text">Linux</h1>
          <span className="linux-text1">
            <span className="linux-text2">
              Каб усталяваць пераклад, накіруйцеся ў вашу папку Steam
              (стандартная папка - ~/.steam/steam), далей адкройце папку
              steamapps/common/ і пасля устаўце файлы з архіва ў гэтую папку.
              Запусціце гульню ў Steam і цешьцеся перакладам
            </span>
            <br className="linux-text3"></br>
            <br className="linux-text4"></br>
            <span className="linux-text5">
              Важна! Калі ў вас ужо ўсталёваны нейкі пераклад, націсніце
            </span>
            <br className="linux-text6"></br>
            <span className="linux-text7">
              Properties &gt; Files &gt; Verify File Integrity i потым усталюйце
              пераклад. Усталяванне паверх можа зламаць гульню!!!
            </span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Linux
