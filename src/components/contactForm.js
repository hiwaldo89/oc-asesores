import React from "react"
import { css } from "@emotion/core"
import Button from "./button"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinnerThird } from "@fortawesome/pro-light-svg-icons"

class ContactForm extends React.Component {
  state = {
    submitting: false,
    response: "",
    formFields: {
      "regimen-fiscal": {
        placeholder: "Régimen fiscal al que perteneces*",
        type: "text",
        value: "",
      },
      "actividad-economica": {
        placeholder: "¿Cuál es tu actividad económica?",
        type: "text",
        value: "",
      },
      empleados: {
        placeholder: "¿Tienes empleados?",
        type: "text",
        value: "",
      },
      servicios: {
        placeholder: "¿Qué servicios requires?*",
        type: "text",
        value: "",
      },
      nombre: {
        placeholder: "¿Cuál es tu nombre?*",
        type: "text",
        value: "",
      },
      _replyto: {
        placeholder: "Correo electrónico*",
        type: "email",
        value: "",
      },
    },
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState(prevState => ({
      formFields: {
        ...prevState.formFields,
        [name]: {
          ...prevState.formFields[name],
          value: value,
        },
      },
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
    const data = {}
    Object.keys(this.state.formFields).forEach(name => {
      data[name] = this.state.formFields[name].value
    })
    this.setState({
      submitting: true,
      response: "",
    })
    axios({
      method: "post",
      url: "https://formspree.io/mvowzrgj",
      data: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then(res => {
        this.setState({
          response:
            "Hemos recibido tu mensaje. Nos pondremos en contacto a la brevedad.",
        })
      })
      .catch(e => {
        this.setState({
          response: "Ocurrió un error, intenta de nuevo",
        })
      })
      .then(() => {
        this.setState({
          submitting: false,
        })
      })
  }

  render() {
    return (
      <>
        <div
          id="cotiza"
          css={css`
            background-color: #f2f2f2;
            padding: 4.5rem 0;
          `}
          data-sal="slide-up"
          data-sal-duration="500"
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
            <form className="row" onSubmit={this.handleSubmit}>
              {Object.keys(this.state.formFields).map((name, index) => (
                <div
                  key={`field-${index}`}
                  css={css`
                    padding-left: 15px;
                    padding-right: 15px;
                    max-width: 100%;
                    flex: 0 0 100%;
                    @media (min-width: 768px) {
                      max-width: 33.3333333%;
                      flex: 0 0 33.3333333%;
                    }
                  `}
                >
                  <input
                    type={this.state.formFields[name].type}
                    placeholder={this.state.formFields[name].placeholder}
                    name={name}
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
                    value={this.state.formFields[name].value}
                    onChange={this.handleInputChange}
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
                <Button buttonText="Enviar" disabled={this.state.submitting} />
              </div>
            </form>
            <div
              css={css`
                text-align: center;
                margin-top: 15px;
                color: #522d6d;
              `}
            >
              {this.state.submitting && (
                <FontAwesomeIcon icon={faSpinnerThird} className="fa-spin" />
              )}
              {this.state.response && this.state.response}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ContactForm
