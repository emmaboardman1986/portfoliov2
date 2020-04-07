import React from "react"
import styled from "styled-components"

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>
}

const SectionWrapper = styled.section`
  padding: 2rem;
`

export default Section
