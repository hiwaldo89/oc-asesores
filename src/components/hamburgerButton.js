import React from "react"
import { css } from "@emotion/core"

class HamburgerButton extends React.Component {
  render() {
    return (
      <button
        className={`hamburger hamburger--elastic${
          this.props.active && " is-active"
        }`}
        onClick={this.props.toggleMenu}
        css={css`
          margin-left: auto;
          z-index: 3;
          @media (min-width: 768px) {
            display: none;
          }
        `}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    )
  }
}

export default HamburgerButton
