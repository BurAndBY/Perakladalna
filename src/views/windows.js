import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './windows.css'

const Windows = (props) => {
  return (
    <div className="windows-container">
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
      <div className="windows-hero">
        <div className="windows-container1">
          <h1 className="windows-text">Windows</h1>
          <span className="windows-text1">
            <span className="windows-text2">
              Каб усталяваць пераклад, накіруйцеся ў вашу папку Steam
              (стандартная папка - C:/Program Files(x86)/Steam), далей адкройце
              папку steamapps/common/ і пасля устаўце файлы з архіва ў гэтую
              папку. Запусціце гульню ў Steam і цешьцеся перакладам
            </span>
            <br className="windows-text3"></br>
            <br className="windows-text4"></br>
            <span className="windows-text5">
              Важна! Калі ў вас ужо ўсталёваны нейкі пераклад, націсніце
            </span>
            <br className="windows-text6"></br>
            <span className="windows-text7">
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

export default Windows
