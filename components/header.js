import React from 'react'
import PropTypes from 'prop-types'
import Head from './head'
import Style from './style'
import Nav from './nav'
import Title from './title'

function Header({ path, pageTitle, ogImage }) {
  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} />

      <header>
        <Title path={path} />
        <Nav />
      </header>
      <Style/>
    </>
  )
}

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string,
}

export default Header
