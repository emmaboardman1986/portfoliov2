import styled from "styled-components"
import React from "react"
import SectionTitle from "./SectionTitle"
import SectionContent from "./SectionContent"
import * as colors from "../../utils/colors"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { breakpoint } from "../../utils/breakpoints"

const Section = ({
  layoutOrder = "",
  title = "",
  content = "",
  link = "",
  linkText = "",
  contentType = "",
}) => {
  return (
    <SectionWrapper>
      <SectionTitle title={title} layoutOrder={layoutOrder} />
      <SectionContent
        content={content}
        link={link}
        linkText={linkText}
        layoutOrder={layoutOrder}
        contentType={contentType}
      />
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 3px solid ${colors.brandSecondary};
  ${breakpoint.md`
    flex-direction: row;
  `}
`
Section.propTypes = {
  layoutOrder: PropTypes.oneOf(["even", "odd"]),
  contentType: PropTypes.oneOf(["text block", "data chunk list", "standard list"]),
}

export default Section
