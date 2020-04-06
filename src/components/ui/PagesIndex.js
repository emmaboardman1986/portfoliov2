import React from "react"
import styled from "styled-components"
import { breakpoint } from "../../utils/breakpoints"

const PagesIndex = ({ children }) => {
  return <PagesIndexWrapper>{children}</PagesIndexWrapper>
}

const PagesIndexWrapper = styled.ul`
  padding-left: 1rem;
  padding-top: 1rem;
  li {
    list-style: disc;
    padding-bottom: 0.5rem;
  }
  h2 {
    font-size: 1.15rem; 
  }
  span {
    display: block;
    font-size: 0.85rem;
    padding-top: 0.5rem;
  }
  ${breakpoint.md`
  h2 {
    font-size: 1.5rem;
  }
  span {
      display: inline-block;
      font-size: 1rem;
      padding-top: 0;
      &:before {
          content: " - ";
      }
  }`}

`

export default PagesIndex
