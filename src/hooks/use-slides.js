import { graphql, useStaticQuery } from "gatsby"

const useSlides = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "slider" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const slides = {
    "slide-1": {
      text1:
        "Somos un despacho fiscal contable, te asesoramos y trabajamos para que mantengas tus finanzas sanas.",
      text2: "¡Déjalo en nuestras manos!",
    },
    "slide-2": {
      text1:
        "Cada situación es diferente, nuestros asesores personalizan el servicio que tu necesitas.",
      text2: "¡Déjalo en nuestras manos!!",
    },
    "slide-3": {
      text1:
        "Cuenta con el apoyo de expertos para tomar las mejores decisiones financieras.",
      text2: "¡Déjalo en nuestras manos!",
    },
  }
  return data.allFile.edges.map(slide => ({
    id: slide.node.id,
    name: slide.node.name,
    fluid: slide.node.childImageSharp.fluid,
    text1: slides[slide.node.name].text1,
    text2: slides[slide.node.name].text2,
  }))
}

export default useSlides
