import React from "react"
import Logo from "../images/logo.svg"
import { css } from "@emotion/core"
import scrollTo from "gatsby-plugin-smoothscroll"
import Headroom from "react-headroom"

const Header = () => (
  <Headroom>
    <div
      css={css`
        background-color: #fff;
        padding: 1rem 0;
      `}
    >
      <div
        className="container"
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <img
          src={Logo}
          alt="oc asesores"
          css={css`
            width: 50%;
            max-width: 120px;
          `}
        />
        <nav
          css={css`
            margin-left: auto;
          `}
        >
          <ul
            css={css`
              list-style: none;
              display: flex;
              align-items: center;
              margin: 0;
              padding: 0;
              button {
                margin-left: 1.5rem;
                display: inline-block;
                padding: 0;
                margin: 0;
                border: none;
                background: transparent;
                cursor: pointer;
                margin-left: 1.5rem;
                transition: all 0.3s ease-in-out;
                &:hover {
                  color: #522d6d;
                }
              }
            `}
          >
            <li>
              <button onClick={() => scrollTo("#beneficios")}>
                Beneficios
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("#servicios")}>Servicios</button>
            </li>
            <li>
              <button onClick={() => scrollTo("#cotiza")}>Cotiza</button>
            </li>
            <li>
              <button onClick={() => scrollTo("#contacto")}>Contacto</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </Headroom>
)

export default Header
