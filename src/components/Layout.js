import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="Description" content="Mat Dupont's Personal Site" />
      <title>Mat Dupont</title>
      <link rel="canonical" href="https://www.matdupont.com" />
      <html lang="en" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
