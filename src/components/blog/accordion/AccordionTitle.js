import React from "react"
import styled from "styled-components"
import * as colors from "../../../utils/colors"

const AccordionTitle = ({ expanded, onClick, title, sectionIsHidden }) => {
  return (
    <AccordionTitleWrapper expanded={expanded}>
      <AccordionTitleContent>
        {title}{" "}
        <button aria-expanded={expanded} onClick={onClick}>
          <svg focusable="false" width="20" height="20" viewBox="0 0 10 10">
            {sectionIsHidden && <rect height="8" width="2" y="1" x="4" />}
            <rect height="2" width="8" y="4" x="1" />
          </svg>
        </button>
      </AccordionTitleContent>
    </AccordionTitleWrapper>
  )
}

const AccordionTitleWrapper = styled.div`
  border-bottom: 1px solid ${colors.brandSecondary};
  background-color: ${props =>
    props.expanded ? colors.brandSecondaryDark : colors.brandSecondary};
  padding: 0.5rem;
`

const AccordionTitleContent = styled.h2`
  display: flex;
  font-size: 1.2rem;
  justify-content: space-between;
  color: white;
  margin: 0;
  button {
    width: auto;
    min-width: 45px;
    min-height: 45px;
    all: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    &:focus svg {
      outline: 0;
      box-shadow: 0 0 0 3px white;
    }
    svg {
      margin-left: 1rem;
      fill: currentColor;
    }
  }
`

export default AccordionTitle
