import React from "react"
import { Global, css } from "@emotion/core"
import "../../node_modules/normalize.css/normalize.css"
import "../../node_modules/slick-carousel/slick/slick.css"
import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body {
          font-family: "Gotham Book";
        }
        button {
          cursor: pointer;
          &:focus {
            outline: none;
          }
        }
        a {
          text-decoration: none;
        }
        .container {
          padding: 0 15px;
          margin: auto;
          @media (min-width: 992px) {
            width: 920px;
          }
          @media (min-width: 1200px) {
            width: 1140px;
          }
        }
        .row {
          margin-left: -15px;
          margin-right: -15px;
          display: flex;
          flex-wrap: wrap;
        }
      `}
    />
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
