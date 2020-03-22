import styled from "styled-components"
import React from "react"
import Heading from "../ui/Heading"
import PropTypes from "prop-types";
import { setFlex } from "../../utils/alignmentHelpers"

const SectionTitle = ({
    title=""
}) => {
  return (
    <SectionTitleWrapper>
        <Heading variant="h3" text={title} />
    </SectionTitleWrapper>
  )
}

const SectionTitleWrapper = styled.div`
display: flex;
${setFlex()};
`
SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default SectionTitle
