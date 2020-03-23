import React from "react"
import Layout from "../components/ui/layout"
import Section from "../components/sectionBanner/Section"
import Carousel from "../components/Carousel/Carousel"
import SkillsStack from "../components/SkillsStack/SkillsStack"
import * as colors from "../utils/colors"

export default () => {
  const dailyUseSkills = ["JavaScript", "HTML & CSS", "Accessibility"]
  const sideProjectSkills = ["Performance", "UX Writing", "User Research"]
  const wipSkills = ["Graphic Design", "Darts", "Technical Writing"]

  return (
    <Layout>
      <Carousel>
        <SkillsStack color={colors.limeMedium} skills={dailyUseSkills} />
        <SkillsStack color={colors.lilacMedium} skills={sideProjectSkills} />
        <SkillsStack color={colors.blueMedium} skills={wipSkills} />
      </Carousel>
      <Section type="even" title="About" content="I am content"></Section>
      <Section type="odd" title="Projects" content="I am content"></Section>
      <Section type="even" title="Blog" content="I am content"></Section>
      <Section type="odd" title="Contact" content="I am content"></Section>
    </Layout>
  )
}
