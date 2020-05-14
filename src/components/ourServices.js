import React from "react"
import { css } from "@emotion/core"
import icon1 from "../images/registros-contables.svg"
import icon2 from "../images/presentacion-impuestos.svg"
import icon3 from "../images/declaracion-anual.svg"
import icon4 from "../images/estados-financieros.svg"
import icon5 from "../images/consultoria-fiscal.svg"
import icon6 from "../images/consultoria-administrativa.svg"
import icon7 from "../images/consultoria-contable.svg"
import icon8 from "../images/consultoria-contable.svg"
import icon9 from "../images/consultoria-contable.svg"
import icon10 from "../images/consultoria-contable.svg"
import icon11 from "../images/consultoria-contable.svg"

const OurServices = () => {
  const services = [
    {
      title: "Registros contables mensuales",
      icon: icon1,
    },
    {
      title: "Cálculo y presentación de impuestos",
      icon: icon2,
    },
    {
      title: "Cálculo y presentación declaración anual",
      icon: icon3,
    },
    {
      title: "Elaboración y presentación de estados financieros",
      icon: icon4,
    },
    {
      title: "Consultoría fiscal",
      icon: icon5,
    },
    {
      title: "Consultoría administrativa",
      icon: icon6,
    },
    {
      title: "Consultoría contable",
      icon: icon7,
    },
    {
      title: "Dictamen de estados financieros para envío a SAT",
      icon: icon8,
    },
    {
      title: "Dictamen ante el IMSS e INFONAVIT",
      icon: icon9,
    },
    {
      title: "Preparación de estados financieros bajo Normas Mexicanas",
      icon: icon10,
    },
    {
      title:
        "Preparación de información sobre situación fiscal ISSIF (32H-CFF) (para contribuyentes que en el ejercicio pasado hayan facturado más de $791M)",
      icon: icon11,
    },
  ]
  return (
    <>
      <div id="servicios" className="container">
        <h2
          css={css`
            color: #522d6d;
            text-align: center;
            margin-bottom: 5rem;
          `}
        >
          Nuestros Servicios
        </h2>
        <div className="row">
          {services.map((service, index) => (
            <div
              key={`service-${index}`}
              css={css`
                padding-left: 15px;
                padding-right: 15px;
                max-width: 25%;
                flex: 0 0 25%;
                margin-bottom: 3.5rem;
              `}
            >
              <img
                src={service.icon}
                alt={service.title}
                css={css`
                  height: 60px;
                  width: auto;
                  margin: auto;
                  display: block;
                `}
              />
              <p
                css={css`
                  text-align: center;
                  color: #522d6d;
                  padding: 20px;
                  font-size: 90%;
                `}
              >
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OurServices
