import React from "react"
import Layout from "../components/ui/layout"
import Section from "../components/ui/Section"
import Heading from "../components/ui/Heading"
import BodyText from "../components/ui/BodyText"

export default () => {
  return (
    <Layout>
      <Section>
        <Heading variant="h1" text="About Me"></Heading>
        <BodyText>
          I am a Front-End Developer, currently based in Edinburgh, Scotland.
        </BodyText>
        <BodyText>
          I have depth of discipline expertise in HTML,
          CSS, vanilla Javascript, React, UX and accessibility best practice.{" "} 
          I have a breadth of cross-discipline competence in project management, QA engineering, and back-end technologies. 
        </BodyText>
        <BodyText>
          In a previous career, I was a Japanese Translator and Interpreter,
          working both in Japan for Japanese local government, in Geneva for the
          United Nations, and in Scotland for the Consulate General of Japan in
          Edinburgh.
        </BodyText>

        <BodyText>
          In 2016, I decided to move into the tech sector, and enrolled on a
          16-week coding bootcamp. Following this, I worked as a QA Engineer,
          before recognising that my heart belonged to the web.{" "}
        </BodyText>

        <BodyText>
          I took a job as a Project Manager at a small web development agency,
          specialising in Magento e-commerce builds. The role allowed me
          hand-ons and in-depth experience of each phase in the web development
          life-cycle. This included pitching to prospective clients,
          requirements gathering, scope writing, UX, design reviews, sprint
          planning and review, testing, and client communications.
        </BodyText>

        <BodyText>
          The closer I was to each phase of the life-cycle, the more I realised
          that I wanted to be on the other side of the development team. I not
          only wanted to understand the problems, I also wanted to help explore
          and build the solutions.
        </BodyText>

        <BodyText>
          In 2018, I enrolled on the Edinburgh Napier University MSc in Web
          Development. I began working as a junior front-end developer for a
          fintech start-up in Edinburgh in September 2019. My team are
          responsible for building bespoke client sites for our white-label
          investment platform, and rebuilding our back-office UI in React.
        </BodyText>
      </Section>
    </Layout>
  )
}
