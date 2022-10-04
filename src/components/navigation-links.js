import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.main}
      </Link>
      <Link to="/games" className="navigation-links-navlink1">
        {props.games}
      </Link>
      <a
        href="https://dsc.gg/perakladi/"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link"
      >
        {props.text3}
      </a>
      <Link to="/about-us" className="navigation-links-navlink2">
        {props.about}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text3: 'Discord',
  main: 'Галоўная',
  about: 'А нас',
  games: 'Гульні',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text3: PropTypes.string,
  main: PropTypes.string,
  about: PropTypes.string,
  games: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
