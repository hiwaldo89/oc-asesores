import React from "react"
import { css } from "@emotion/core"
import Button from "./button"

const ContactForm = () => {
  const formFields = [
    {
      placeholder: "Régimen fiscal al que perteneces*",
      type: "text",
      name: "regimen-fiscal",
    },
    {
      placeholder: "¿Cuál es tu actividad económica?",
      type: "text",
      name: "actividad-economica",
    },
    {
      placeholder: "¿Tienes empleados?",
      type: "text",
      name: "empleados",
    },
    {
      placeholder: "¿Qué servicios requires?*",
      type: "text",
      name: "servicios",
    },
    {
      placeholder: "¿Cuál es tu nombre?*",
      type: "text",
      name: "nombre",
    },
    {
      placeholder: "Correo electrónico*",
      type: "email",
      name: "email",
    },
  ]
  return (
    <>
      <div
        id="cotiza"
        css={css`
          background-color: #f2f2f2;
          padding: 4.5rem 0;
        `}
      >
        <div className="container">
          <h2
            css={css`
              color: #522d6d;
              text-align: center;
            `}
          >
            Solicita una cotización a tu medida
          </h2>
          <p
            css={css`
              text-align: center;
              margin-bottom: 4.5rem;
            `}
          >
            Llena la siguiente información para solicitar una cotización, nos
            pondremos en contacto contigo
          </p>
          <form className="row">
            {formFields.map((field, index) => (
              <div
                key={`field-${index}`}
                css={css`
                  padding-left: 15px;
                  padding-right: 15px;
                  max-width: 33.3333333%;
                  flex: 0 0 33.3333333%;
                `}
              >
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  css={css`
                    width: 100%;
                    background: transparent;
                    border: none;
                    text-align: center;
                    border-bottom: solid 1px #522d6d;
                    margin-bottom: 3rem;
                    padding: 0.5rem;
                    ::placeholder {
                      color: #522d6d;
                    }
                  `}
                />
              </div>
            ))}
            <div
              css={css`
                text-align: center;
                flex: 0 0 100%;
                max-width: 100%;
              `}
            >
              <Button buttonText="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm
