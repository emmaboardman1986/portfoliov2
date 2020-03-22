import styled from "styled-components"
import React from "react"
import Heading from "../ui/Heading"
import PropTypes from "prop-types";
import { setFlex } from "../../utils/alignmentHelpers"

const SectionContent = ({
    content=""
}) => {
  return (
    <SectionContentWrapper>
     <p>{content}</p>
    </SectionContentWrapper>
  )
}

const SectionContentWrapper = styled.div`
display: flex;
${setFlex()};
`
SectionContent.propTypes = {
    content: PropTypes.string.isRequired
}

export default SectionContent
