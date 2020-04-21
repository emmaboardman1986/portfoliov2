import React, { useState } from "react"
import styled from "styled-components"
import AccordionTitle from "./AccordionTitle"
import AccordionContent from "./AccordionContent"
import * as colors from "../../../utils/colors"

const AccordionSection = ({ title, children, expanded, onClick }) => {
  return (
    <AccordionSectionWrapper expanded={expanded}>
      <AccordionTitle expanded={expanded} onClick={onClick} title={title} />
      {expanded && <AccordionContent>{children}</AccordionContent>}
    </AccordionSectionWrapper>
  )
}

const AccordionSectionWrapper = styled.div`
  background-color: ${props =>
    props.expanded ? colors.brandSecondaryDark : colors.brandPrimary};
`

export default AccordionSection
