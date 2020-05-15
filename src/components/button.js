import React from "react"
import { css } from "@emotion/core"

const Button = ({ buttonText, onClick }) => (
  <button
    css={css`
      cursor: pointer;
      background-color: #522d6d;
      color: #fff;
      font-family: "Gotham Book";
      border: solid 1px #522d6d;
      padding: 0.5rem 2.8rem;
      border-radius: 25px;
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 0.7;
      }
    `}
    onClick={onClick}
  >
    {buttonText}
  </button>
)

export default Button
