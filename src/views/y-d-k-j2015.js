import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './y-d-k-j2015.css'

const YDKJ2015 = (props) => {
  return (
    <div className="y-d-k-j2015-container">
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
      <div className="y-d-k-j2015-hero">
        <h1 className="y-d-k-j2015-text">
          <span>Ты Ніджэка Не Ведаеш 2015</span>
          <br></br>
          <span>             </span>
          <span className="y-d-k-j2015-text4">
            {' '}
             
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="y-d-k-j2015-text5">         Першы Эпізод</span>
          <br></br>
        </h1>
        <span className="y-d-k-j2015-text7"></span>
        <button className="y-d-k-j2015-button button">Спампаваць</button>
      </div>
    </div>
  )
}

export default YDKJ2015
