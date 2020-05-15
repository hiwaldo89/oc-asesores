import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "banner-img.jpg" }) {
          id
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <div
          css={css`
            max-width: 100%;
            flex: 0 0 100%;
            @media (min-width: 768px) {
              max-width: 50%;
              flex: 0 0 50%;
            }
          `}
        >
          <Img fluid={file.childImageSharp.fluid} />
        </div>
        <div
          css={css`
            background-color: #522d6d;
            max-width: 100%;
            flex: 0 0 100%;
            text-align: center;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            @media (min-width: 768px) {
              max-width: 50%;
              flex: 0 0 50%;
            }
          `}
        >
          <p
            css={css`
              width: 70%;
              font-size: 1.2rem;
              line-height: 2;
            `}
          >
            ¡Mantén finanzas sanas, en orden y al día con nosotros! Nuestra
            atención es personalizada y a la medida de tus necesidades.
          </p>
        </div>
      </div>
    </>
  )
}

export default Banner
