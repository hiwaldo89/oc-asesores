import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import useSlides from "../hooks/use-slides"
import { css } from "@emotion/core"
import Button from "../components/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from "@fortawesome/pro-light-svg-icons"
import scrollTo from "gatsby-plugin-smoothscroll"

const HomeSlider = () => {
  const slides = useSlides()

  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <button
      {...props}
      css={css`
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        z-index: 2;
        background: transparent;
        border: 0;
        color: #fff;
      `}
    >
      {children}
    </button>
  )

  const settings = {
    prevArrow: (
      <SlickButtonFix
        css={css`
          left: 15px;
        `}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="fa-lg" />
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix
        css={css`
          right: 15px;
        `}
      >
        <FontAwesomeIcon icon={faChevronRight} className="fa-lg" />
      </SlickButtonFix>
    ),
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  }

  return (
    <Slider
      {...settings}
      css={css`
        position: relative;
      `}
    >
      {slides.map(slide => (
        <div
          key={slide.id}
          css={css`
            position: relative;
            color: #fff;
            &:after {
              content: "";
              display: block;
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background: rgb(82, 45, 109);
              background: linear-gradient(
                90deg,
                rgba(82, 45, 109, 1) 31%,
                rgba(255, 255, 255, 1) 79%
              );
              opacity: 0.4;
            }
          `}
        >
          <div
            css={css`
              height: 80vh;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <div
              css={css`
                position: absolute;
                width: 100%;
                height: 100%;
              `}
            >
              <Img
                fluid={slide.fluid}
                css={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  top: 0;
                  left: 0;
                `}
              />
            </div>
            <div
              css={css`
                position: relative;
                z-index: 2;
                text-align: center;
                font-family: "Gotham Medium";
                line-height: 1.9;
                @media (min-width: 768px) {
                  width: 35%;
                  margin: auto;
                }
                p {
                  margin-bottom: 2rem;
                }
              `}
            >
              <p>{slide.text1}</p>
              <p>{slide.text2}</p>
              <Button
                buttonText="Servicios"
                onClick={() => scrollTo("#servicios")}
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default HomeSlider
