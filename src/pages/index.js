import React from "react"
import Layout from "../components/ui/layout"
import Section from "../components/sectionBanner/Section"
import Carousel from "../components/Carousel/Carousel"
import SkillsStack from "../components/SkillsStack/SkillsStack"
import Hero from "../components/hero/Hero"
import * as colors from "../utils/colors"

export default () => {
  const dailyUseSkills = ["JavaScript", "HTML & CSS", "Accessibility"]
  const sideProjectSkills = ["Performance", "UX Writing", "User Research"]
  const wipSkills = ["Graphic Design", "Darts", "Technical Writing"]

  const sectionContent = [
    {
      sectionTitle: "About",
      sectionContent:
        "<p>Hi! I’m Emma, a front-end developer with a passion for UX and a commitment to accessibility.</p><p>I began my professional life as a Japanese translator & interpreter. Seeking new challenges, I moved into tech in 2016.</p><p>I currently work for a fintech start-up in Edinburgh, Scotland. My team are responsible for building bespoke client sites for our white-label platform, and rebuilding our back-office UI in React.</p>",
      sectionLink: "about",
      sectionLinkText: "Read more",
      sectionContentType: "text block",
    },
    {
      sectionTitle: "Projects",
      sectionContent:
        "<ul><li><h4><a href='#'>Project Title</a></h4><p>Project Skill, Project Skill, Project Skill</p></li><li><h4><a href='#'>Project Title</a></h4><p>Project Skill, Project Skill, Project Skill</p></li></ul>",
      sectionLink: "projects",
      sectionLinkText: "See all",
      sectionContentType: "data chunk list",
    },
    {
      sectionTitle: "Blog",
      sectionContent:
        "<ul><li><h4><a href='#'>Project Title</a></h4><p>Project Skill, Project Skill, Project Skill</p></li><li><h4><a href='#'>Project Title</a></h4><p>Project Skill, Project Skill, Project Skill</p></li></ul>",
      sectionLink: "blog",
      sectionLinkText: "See all",
      sectionContentType: "data chunk list",
    },
    {
      sectionTitle: "Contact",
      sectionContent:
        "<h4>Get in touch!</h4><ul><li><p><a href='#'>Linked In</a></p></li><li><p><a href='#'>GitHub</a></p></li><li><p><a href='#'>emma@emmaboardman.co.uk</a></p></li></ul>",
      sectionLink: "",
      sectionLinkText: "",
      sectionContentType: "standard list",
    },
  ]

  return (
    <Layout>
      <Carousel>
        <SkillsStack color={colors.limeMedium} skills={dailyUseSkills} skillAnnotation="Day to Day"/>
        <SkillsStack color={colors.lilacMedium} skills={sideProjectSkills} skillAnnotation="Side Projects" />
        <SkillsStack color={colors.blueMedium} skills={wipSkills} skillAnnotation="Work in Progress"/>
      </Carousel>
      <Hero>
        <SkillsStack color={colors.limeMedium} skills={dailyUseSkills} skillAnnotation="Day to Day" />
        <SkillsStack color={colors.lilacMedium} skills={sideProjectSkills} skillAnnotation="Side Projects"  />
        <SkillsStack color={colors.blueMedium} skills={wipSkills} skillAnnotation="Work in Progress"/>
      </Hero>

      {sectionContent.map((section, index) => (
        <Section
          key={index}
          layoutOrder={index % 2 == 0 ? "even" : "odd"}
          title={section.sectionTitle}
          content={section.sectionContent}
          contentType={section.sectionContentType}
          link={section.sectionLink}
          linkText={section.sectionLinkText}
        />
      ))}
    </Layout>
  )
}
