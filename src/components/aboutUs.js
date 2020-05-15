import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "./button"
import scrollTo from "gatsby-plugin-smoothscroll"

const AboutUs = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "circulo-compu-min.png" }) {
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
        id="beneficios"
        className="container"
        css={css`
          padding-top: 3.5rem;
          padding-bottom: 4.5rem;
        `}
      >
        <div
          className="row"
          css={css`
            align-items: center;
          `}
        >
          <div
            css={css`
              padding-left: 15px;
              padding-right: 15px;
              max-width: 100%;
              flex: 0 0 100%;
              margin-bottom: 3rem;
              @media (min-width: 768px) {
                max-width: 50%;
                flex: 0 0 50%;
                margin-bottom: 0;
              }
            `}
          >
            <Img fluid={file.childImageSharp.fluid} />
          </div>
          <div
            css={css`
              padding-left: 15px;
              padding-right: 15px;
              margin-left: auto;
              max-width: 100%;
              flex: 0 0 100%;
              @media (min-width: 768px) {
                max-width: 40%;
                flex: 0 0 40%;
              }
            `}
          >
            <ul
              css={css`
                list-style: none;
                margin: 0;
                padding: 0;
                li {
                  margin-bottom: 2.5rem;
                  padding-left: 10px;
                  position: relative;
                  &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0.6rem;
                    bottom: 0;
                    width: 3px;
                    height: 1px;
                    background-color: #000;
                  }
                }
              `}
            >
              <li>
                Atención centrada en las actividades de nuestros clientes.
              </li>
              <li>
                Equipo de profesionales en constante actualización y
                capacitación.
              </li>
              <li>
                Nos comunicamos de manera sencilla y clara para resolver
                cualquier inquietud.
              </li>
              <li>Brindamos seguridad, transparencia y claridad.</li>
            </ul>
            <Button
              buttonText="Contacto"
              onClick={() => scrollTo("#contacto")}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
