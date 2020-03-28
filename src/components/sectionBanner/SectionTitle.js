import styled from "styled-components"
import React from "react"
import Heading from "../ui/Heading"
import PropTypes from "prop-types"
import { setFlex } from "../../utils/alignmentHelpers"
import { breakpoint } from "../../utils/breakpoints"
import * as colors from "../../utils/colors"

const SectionTitle = ({ title = "", layoutOrder = "" }) => {
  return (
    <SectionTitleWrapper layoutOrder={layoutOrder}>
      <Heading variant="h3" text={title} />
    </SectionTitleWrapper>
  )
}

const SectionTitleWrapper = styled.div`
    box-sizing: border-box;
    background-color: ${colors.brandSecondary};
    color: ${colors.brandPrimary};
    width: 100%;
    padding: 1.5rem;
    ${breakpoint.md`
        width: ${props => (props.layoutOrder === "even" ? "40%" : "30%")};
        background-color: ${props =>
          props.layoutOrder === "even"
            ? colors.brandSecondary
            : colors.brandPrimary};
        color: ${props =>
          props.layoutOrder === "even"
            ? colors.brandPrimary
            : colors.brandSecondary};
    `}
    border-right: 3px solid ${colors.brandSecondary};
display: flex;
${setFlex()};
`
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  layoutOrder: PropTypes.oneOf(["even", "odd"]),
}

export default SectionTitle
