import React from "react"
import Layout from "../components/ui/layout"
import Section from "../components/sectionBanner/Section"
import Carousel from "../components/Carousel/Carousel"
export default () => {
  return (
    <Layout>
      <Carousel>
      <div>SLIDE 1</div>
      <div>SLIDE 2</div>
      <div>SLIDE 3</div>
      </Carousel>
      <Section type="even" title="About" content="I am content"></Section>
      <Section type="odd" title="Projects" content="I am content"></Section>
      <Section type="even" title="Blog" content="I am content"></Section>
      <Section type="odd" title="Contact" content="I am content"></Section>
    </Layout>
  )
}
