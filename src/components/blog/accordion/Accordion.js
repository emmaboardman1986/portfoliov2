import React, { useState, useEffect } from "react"
import styled from "styled-components"
import * as colors from "../../../utils/colors"
import { breakpoint } from "../../../utils/breakpoints"
import AccordionSection from "../../blog/accordion/AccordionSection"

const Accordion = ({ children }) => {
  const [expandedSections, setExpandedSections] = useState({})

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

  const toggleAll = (value) => {
    let updatedSections = {}
    let reducer = (returnedObject, sectionIndex) => {
        returnedObject[sectionIndex.props.title] = value
      return returnedObject
    }
    children.reduce(reducer, updatedSections)
    setExpandedSections(updatedSections)
  }

  return (
    <>
    <AccordionToggle onClick={() => toggleAll(true)}>Expand All</AccordionToggle>
    <AccordionToggle onClick={() => toggleAll(false)}>Collapse All</AccordionToggle>
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
  margin: 0.75rem 0;
  ${breakpoint.md`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  `}
`

const AccordionToggle = styled.button`
  border-radius: 3px;
  border: 2px solid ${colors.brandSecondary};
  box-shadow: 2px 2px 0 0 ${colors.brandSecondary};
  margin-bottom: 0.15rem ;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  background-color: ${colors.brandPrimaryLight};
`

export default Accordion
