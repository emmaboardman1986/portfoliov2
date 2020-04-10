import React, { useState, useEffect } from "react"
import styled from "styled-components"
import * as colors from "../../../utils/colors"
import { breakpoint } from "../../../utils/breakpoints"
import AccordionSection from "../../blog/accordion/AccordionSection"

const Accordion = ({ children }) => {
  const [expandedSections, setExpandedSections] = useState({})
  const [expandAll, setExpandAll] = useState(false)

  useEffect(() => {
    let availableSections = {}
    let reducer = (returnedObject, sectionIndex) => {
      if (!returnedObject[sectionIndex.props.title]) {
        returnedObject[sectionIndex.props.title] = false
      }
      return returnedObject
    }
    children.reduce(reducer, availableSections)
    setExpandedSections(availableSections)
  }, [])

  const handleClick = index => {
    setExpandedSections({
      ...expandedSections,
      [index]: !expandedSections[index],
    })
  }

  const toggleAll = () => {
    let updatedSections = {}
    let reducer = (returnedObject, sectionIndex) => {
      returnedObject[sectionIndex.props.title] = !expandAll
      return returnedObject
    }
    children.reduce(reducer, updatedSections)
    setExpandedSections(updatedSections)
    setExpandAll(!expandAll)
  }

  return (
    <>
      <AccordionToggle
        role="switch"
        aria-pressed={expandAll}
        onClick={toggleAll}
        className={expandAll ? "pressed-in" : "popped-out"}
      >
        {expandAll === true ? "Collapse All" : "Expand All"}
      </AccordionToggle>
      {/* <AccordionToggle onClick={() => toggleAll(true)}>Expand All</AccordionToggle>
    <AccordionToggle onClick={() => toggleAll(false)}>Collapse All</AccordionToggle> */}
      <AccordionWrapper>
        {children.map((child, index) => (
          <AccordionSection
            key={index}
            title={child.props.title}
            onClick={() => handleClick(child.props.title)}
            expanded={expandedSections[child.props.title]}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </AccordionWrapper>
    </>
  )
}

const AccordionWrapper = styled.div`
  border-radius: 3px;
  width: 100%;
  border: 2px solid ${colors.brandSecondary};
  box-shadow: 7px 6px 0 0 ${colors.brandSecondary};
  box-shadow: ${props => (props.expandAll ? "inset 0 0 0 0.15rem #000" : "")};
  margin: 0.75rem 0;
  ${breakpoint.md`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  `}
`

export const setPressed = () => {
  return `box-shadow: inset 0 0 0 0.15rem #000, 
  inset 0.25em 0.25em 0 #fff;`
}

const AccordionToggle = styled.button`
  border-radius: 3px;
  border: 2px solid ${colors.brandSecondary};
  box-shadow: 2px 2px 0 0 ${colors.brandSecondary};
  margin-bottom: 0.15rem;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  background-color: ${colors.brandPrimary};
  min-width: fit-content;
  &.pressed-in {
    box-shadow: -2px -2px 0 0 ${colors.brandSecondary}, inset 0 0 0.15rem ${colors.brandSecondaryDark}, inset 0.25em 0.25em 0 #fff;
  }
`

export default Accordion
