import React from "react"
import Logo from "../images/logo.svg"
import { css } from "@emotion/core"
import scrollTo from "gatsby-plugin-smoothscroll"
import Headroom from "react-headroom"
import HamburgerButton from "./hamburgerButton"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false,
    }
  }

  toggleMenu = () => {
    this.setState({ menuActive: !this.state.menuActive })
  }

  render() {
    return (
      <>
        <div>
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
                <HamburgerButton
                  toggleMenu={this.toggleMenu}
                  active={this.state.menuActive}
                />
                <nav
                  className={this.state.menuActive && "menu-show"}
                  css={css`
                    margin-left: auto;
                    position: fixed;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    background-color: #fff;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(-100%);
                    transition: all 0.3s ease-in-out;
                    &.menu-show {
                      transform: translateX(0);
                    }
                    @media (min-width: 768px) {
                      position: relative;
                      width: auto;
                      height: auto;
                      top: auto;
                      left: auto;
                      background-color: transparent;
                      display: block;
                      transform: translateX(0);
                    }
                  `}
                >
                  <ul
                    css={css`
                      list-style: none;
                      display: flex;
                      align-items: center;
                      margin: 0;
                      padding: 0;
                      flex-direction: column;
                      @media (min-width: 768px) {
                        flex-direction: row;
                      }
                      li {
                        margin-bottom: 1.2rem;
                        &:last-child {
                          margin-bottom: 0;
                        }
                        @media (min-width: 768px) {
                          margin: 0;
                        }
                      }
                      button {
                        display: inline-block;
                        padding: 0;
                        margin: 0;
                        border: none;
                        background: transparent;
                        cursor: pointer;
                        transition: all 0.3s ease-in-out;
                        font-size: 1.5rem;
                        &:hover {
                          color: #522d6d;
                        }
                        @media (min-width: 768px) {
                          margin-left: 1.5rem;
                          font-size: 1rem;
                        }
                      }
                    `}
                  >
                    <li>
                      <button
                        onClick={() => {
                          scrollTo("#beneficios")
                          this.toggleMenu()
                        }}
                      >
                        Beneficios
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          scrollTo("#servicios")
                          this.toggleMenu()
                        }}
                      >
                        Servicios
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          scrollTo("#cotiza")
                          this.toggleMenu()
                        }}
                      >
                        Cotiza
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          scrollTo("#contacto")
                          this.toggleMenu()
                        }}
                      >
                        Contacto
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Headroom>
        </div>
      </>
    )
  }
}

export default Header
