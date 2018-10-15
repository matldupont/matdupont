import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Mat Dupont</title>
      <link rel="canonical" href="https://www.matdupont.com" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
