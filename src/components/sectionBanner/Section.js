import styled from "styled-components"
import React from "react"
import SectionTitle from "./SectionTitle"
import SectionContent from "./SectionContent"
import * as colors from "../../utils/colors"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { breakpoint } from "../../utils/breakpoints"

const Section = ({ type = "", title = "", content = "" }) => {
  return (
    <SectionWrapper title={title} content={content} type={type}>
      <SectionTitle title={title} />
      <SectionContent content={content} />
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 3px solid ${colors.brandSecondary};
  ${breakpoint.sm`
    flex-direction: row;
  `}
  div:first-child {
    background-color: ${colors.brandSecondary};
    color: ${colors.brandPrimary};
    width: 100%;
    padding: 4rem 0;
    ${breakpoint.sm`
        width: ${props => (props.type === "even" ? "40%" : "30%")};
        padding: 4rem;
        background-color: ${props =>
          props.type === "even" ? colors.brandSecondary : colors.brandPrimary};
        color: ${props =>
          props.type === "even" ? colors.brandPrimary : colors.brandSecondary};
    `}
    border-right: 3px solid ${colors.brandSecondary};
  }
  div:last-child {
    background-color: ${props =>
      props.type === "even" ? colors.brandPrimary : colors.brandWhite};
    color: ${colors.brandSecondary};
    width: 100%;
    ${breakpoint.sm`
    width: ${props => (props.type === "even" ? "60%" : "70%")};
    `}
   
  }
`
Section.propTypes = {
  type: PropTypes.oneOf(["even", "odd"]),
}

export default Section
