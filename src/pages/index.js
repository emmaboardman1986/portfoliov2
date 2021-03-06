import React from "react"
import Layout from "../components/ui/layout"
import SectionBanner from "../components/sectionBanner/SectionBanner"
import Carousel from "../components/homepage/carousel/Carousel"
import SkillsStack from "../components/homepage/skillsStack/SkillsStack"
import Hero from "../components/homepage/hero/Hero"
import * as colors from "../utils/colors"

export default () => {
  const dailyUseSkills = ["JavaScript", "HTML & CSS", "Accessibility"]
  const sideProjectSkills = ["Performance", "Content Strategy", "User Research"]
  const wipSkills = ["Graphic Design", "Darts", "Technical Writing"]

  const sectionContent = [
    {
      sectionTitle: "About",
      sectionContent:
        "<p>Hi! I’m Emma, a front-end developer with a passion for UX and a commitment to accessibility.</p><p>I began my professional life as a Japanese translator & interpreter. Seeking new challenges, I moved into tech in 2016.</p><p>I currently work for a fintech start-up in Edinburgh, Scotland. My team are responsible for building bespoke client sites for our white-label investment platform, and rebuilding our back-office UI in React.</p>",
      sectionLink: "about-me",
      sectionLinkText: "Read more",
      sectionContentType: "text block",
    },
    {
      sectionTitle: "Projects",
      sectionContent:
        "<ul><li><h3><a href='/projects/adventures-in-accessibility'>Adventures in Accessibility</a></h3><p>Semantic HTML, Vanilla JS, React</p></li><li><h3><a href='/projects/nihongo-scotland'>Nihongo Scotland</a></h3><p>React, Styled Components, SCSS, Gatsby, Prismic</p></li></ul>",
      sectionLink: "projects",
      sectionLinkText: "Show all",
      sectionContentType: "data chunk list",
    },
    {
      sectionTitle: "Blog",
      sectionContent:
        "<ul><li><h3><a href='blog/accessible-custom-file-upload--v1/'>Accessible, custom-styled File Uploads</a></h3><p>Accessibility, Semantic HTML, Vanilla JS, React</p></li><li><h3><a href='/blog/accessible-custom-radio-buttons'>Accessible, custom-styled Radio Buttons</a></h3><p>Accessibility, Semantic HTML, no JS, React</p></li></ul>",
      sectionLink: "blog",
      sectionLinkText: "Show all",
      sectionContentType: "data chunk list",
    },
    {
      sectionTitle: "Contact",
      sectionContent:
        "<h3>Get in touch!</h3><ul><li><p><a href='https://www.linkedin.com/in/emma-boardman-95a97b133/' target='_blank'>Linked In</a></p></li><li><p><a href='https://github.com/emma-boardman' target='_blank'>GitHub</a></p></li><li><p><a href='mailto:emma@emmaboardman.co.uk'>emma@emmaboardman.co.uk</a></p></li></ul>",
      sectionLink: "",
      sectionLinkText: "",
      sectionContentType: "standard list",
    },
  ]

  return (
    <p>Nothing to see here.</p>
    // <Layout>
    //   <h1 className="visually-hidden">Emma Boardman, Front-end & UX development Portfolio</h1>
    //   <Carousel>
    //     <SkillsStack color={colors.limeMedium} skills={dailyUseSkills} skillAnnotation="Day to Day"/>
    //     <SkillsStack color={colors.lilacMedium} skills={sideProjectSkills} skillAnnotation="Side Projects" />
    //     <SkillsStack color={colors.blueMedium} skills={wipSkills} skillAnnotation="Work in Progress"/>
    //   </Carousel>
    //   <Hero>
    //     <SkillsStack color={colors.limeMedium} skills={dailyUseSkills} skillAnnotation="Day to Day" />
    //     <SkillsStack color={colors.lilacMedium} skills={sideProjectSkills} skillAnnotation="Side Projects"  />
    //     <SkillsStack color={colors.blueMedium} skills={wipSkills} skillAnnotation="Work in Progress"/>
    //   </Hero>

    //   {sectionContent.map((section, index) => (
    //     <SectionBanner
    //       key={index}
    //       layoutOrder={index % 2 === 0 ? "even" : "odd"}
    //       title={section.sectionTitle}
    //       content={section.sectionContent}
    //       contentType={section.sectionContentType}
    //       link={section.sectionLink}
    //       linkText={section.sectionLinkText}
    //     />
    //   ))}
    // </Layout>
  )
}
