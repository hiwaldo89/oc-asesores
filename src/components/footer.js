import React from "react"
import { css } from "@emotion/core"

const Footer = () => {
  const currentDate = new Date()
  return (
    <>
      <div
        css={css`
          background-color: #522d6d;
          color: #fff;
          text-align: center;
        `}
      >
        <p
          css={css`
            margin-bottom: 0;
            padding: 2rem 15px;
          `}
        >
          OC Asesores {currentDate.getFullYear()}
        </p>
      </div>
    </>
  )
}

export default Footer
