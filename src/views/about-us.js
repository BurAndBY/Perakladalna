import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
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
      <div className="about-us-hero">
        <div className="about-us-container1">
          <h1 className="about-us-text">А нас</h1>
          <span className="about-us-text1">
            <span className="about-us-text2">Гэта сайт перакладчыка</span>
            <span className="about-us-text3">ў</span>
            <span className="about-us-text4">
              {' '}
              Jackbox на беларускую мову. Пераклады будут вельмі не частымі.
              Гульняў на беларускай мове не шмат, таму я буду рабіць пераклады
              сам.
            </span>
            <br></br>
          </span>
        </div>
        <div className="about-us-container2">
          <h1 className="about-us-text6">Каманда</h1>
        </div>
        <div className="about-us-feature-card">
          <img
            alt="image"
            src="/playground_assets/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B0%D1%8F%20%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0%20%5B%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%5D-1500h.png"
            className="about-us-image"
          />
          <h2 className="about-us-text7">BurAndBY</h2>
          <span className="about-us-text8">
            Так, калі я закресліў &quot;ў&quot;, я не жартаваў
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
