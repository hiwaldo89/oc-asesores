import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeSlider from "../components/slider"
import AboutUs from "../components/aboutUs"
import OurServices from "../components/ourServices"
import ContactForm from "../components/contactForm"
import Banner from "../components/banner"
import ContactSection from "../components/contactSection"

const HomePage = () => (
  <Layout>
    <SEO title="Inicio" />
    <HomeSlider />
    <AboutUs />
    <OurServices />
    <ContactForm />
    <Banner />
    <ContactSection />
  </Layout>
)

export default HomePage
