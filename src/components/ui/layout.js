import React, { useState } from "react"
import Header from "../header/Header"
import HeadingFont from "../../../static/assets/fonts/BC-Falster-Grotesk-Regular.woff2"
import BodyFont from "../../../static/assets/fonts/robotomono-regular-webfont.woff2"
import { Helmet } from "react-helmet"
import "../../styles/reboot.css"
import "../../styles/typography.css"

const Layout = ({ children }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="font"
          href={HeadingFont}
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href={BodyFont}
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Header
        isMenuExpanded={isMenuExpanded}
        setIsMenuExpanded={setIsMenuExpanded}
      />

      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
