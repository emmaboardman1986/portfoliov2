import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"
import Button from "../ui/Button"
import { setFlex } from "../../utils/alignmentHelpers"
import * as colors from "../../utils/colors"
// import SectionContentDataChunkList from "./SectionContentDataChunkList"
import { breakpoint } from "../../utils/breakpoints"

const SectionContent = ({
  content = "",
  link = "",
  linkText = "",
  layoutOrder = "",
  contentType = "",
}) => {
  function createMarkup() {
    return { __html: content }
  }
  return (
    <SectionContentWrapper layoutOrder={layoutOrder}>
      {contentType === "data chunk list" ? (
        <SectionContentDataChunkList
          dangerouslySetInnerHTML={createMarkup()}
          layoutOrder={layoutOrder}
        />
      ) : contentType === "standard list" ? (
        <SectionContentStandardList dangerouslySetInnerHTML={createMarkup()} />
      ) : (
        <SectionContentTextBlock
          dangerouslySetInnerHTML={createMarkup()}
        ></SectionContentTextBlock>
      )}
      {link && <Button link={link} text={linkText}></Button>}
    </SectionContentWrapper>
  )
}

const SectionContentWrapper = styled.div`
  box-sizing: border-box;
  background-color: ${props =>
    props.layoutOrder === "even" ? colors.brandPrimary : colors.brandWhite};
  color: ${colors.brandSecondary};
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  button {
  
    margin-top: 1rem;
    margin-bottom: 1rem;
    ${breakpoint.md`
    align-self: flex-end;
    margin: 0;
    margin-right: ${props => (props.type === "even" ? "7%" : "6%")};
    `}

    min-width: 150px;
  }
  p {
    /* text-align: center; */
    margin-bottom: 1.5rem;
  }
  ${setFlex()};
  ${breakpoint.md`
    width: ${props => (props.layoutOrder === "even" ? "60%" : "70%")};
    padding: 1.75rem 4rem;
    p {
      text-align: justify;
      width: 95%;
    }
    `}
`

const SectionContentTextBlock = styled.div``

const SectionContentStandardList = styled.div`
  width: 100%;

  li {
    a {
      font-family: "BC-Falster-Grotesk-Regular", Arial;
      color: ${colors.brandSecondary};
      text-decoration: none;
      padding: 0.25rem;
      padding-left: 0;
      border-bottom: 1px solid ${colors.brandSecondary};
    
      &:hover,
      &:focus {
        background-color: ${props =>
          props.layoutOrder === "even"
            ? colors.brandWhite
            : colors.brandPrimary};
      }
    }
    margin-bottom: 2rem;
    &:last-of-type {
      margin-bottom: 1.75rem;
  }
  p {
    text-align: left;
    position: relative;
    &:before {
      content: ">";
      margin-right: 0.5rem;
    }
  }
`

const SectionContentDataChunkList = styled(SectionContentStandardList)`
  h3 {
    margin: 1rem;
    font-family: "BC-Falster-Grotesk-Regular", Arial;
  }
  p {
    &:before {
      margin-left: 1rem;
    }
  }
`

SectionContent.propTypes = {
  content: PropTypes.string.isRequired,
  layoutOrder: PropTypes.string.isRequired,
  contentType: PropTypes.oneOf([
    "text block",
    "data chunk list",
    "standard list",
  ]),
}

export default SectionContent
