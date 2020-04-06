import React from "react"
import styled from "styled-components"

const Section = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>
}

const SectionWrapper = styled.section`
  padding: 1rem;
`

export default Section
