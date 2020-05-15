import React from "react"
import { css } from "@emotion/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/pro-light-svg-icons"

const ContactSection = () => {
  const {
    allFile: { edges: images },
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { in: ["holding-phone", "concrete"] } }) {
        edges {
          node {
            id
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <div
        id="contacto"
        className="container"
        css={css`
          padding-top: 3rem;
          padding-bottom: 3rem;
          .contact-block {
            hr {
              background-color: #522d6d;
              height: 2px;
              border: none;
              margin-bottom: 25px;
              margin-top: 15px;
            }
            h3,
            a {
              color: #522d6d;
            }
            h3 {
              margin-bottom: 20px;
            }
            a {
              display: block;
              &:nth-of-type(1) {
                margin-bottom: 30px;
              }
            }
            span {
              color: #000;
              margin-left: 15px;
            }
            p {
              padding-left: 30px;
              position: relative;
              line-height: 1.8;
              svg {
                position: absolute;
                top: 0.4rem;
                left: 0%;
                color: #522d6d;
              }
            }
          }
        `}
      >
        <h2
          css={css`
            text-align: center;
            color: #522d6d;
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 3.5rem;
          `}
        >
          Contáctanos <br />
          ¡Será un placer conocerte y resolver tus dudas!
        </h2>
        <div className="row">
          <div
            css={css`
              padding-left: 15px;
              padding-right: 15px;
              max-width: 40%;
              flex: 0 0 40%;
              margin-left: 50px;
            `}
          >
            <div className="contact-block">
              <Img
                fixed={images[0].node.childImageSharp.fixed}
                style={{ borderRadius: "50%" }}
              />
              <hr />
              <h3>Nuestros datos:</h3>
              <a href="tel:4421388175">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>442 138 81 75</span>
              </a>
              <a href="mailto:olga.cochardo@oc-asesores.com">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>olga.corchado@oc-asesores.com</span>
              </a>
            </div>
          </div>
          <div
            css={css`
              padding-left: 15px;
              padding-right: 15px;
              max-width: 40%;
              flex: 0 0 40%;
              margin-left: auto;
              margin-right: 50px;
            `}
          >
            <div className="contact-block">
              <Img
                fixed={images[1].node.childImageSharp.fixed}
                style={{ borderRadius: "50%" }}
              />
              <hr />
              <h3>Nos encontramos en:</h3>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                Ezequiel Montes No. 128 NTE int. 4 <br />
                Col. Centro <br />
                Querétaro, Qro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
