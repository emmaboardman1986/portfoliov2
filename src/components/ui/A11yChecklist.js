import React from "react"
import styled from "styled-components"
import * as colors from "../../utils/colors"
import { breakpoint } from "../../utils/breakpoints"

const A11yChecklist = ({ children }) => {
  return (
    <A11yChecklistWrapper>
      <ul>
        <li>Can be operated by a mouse click.</li>
        <li>Can be operated by touch</li>
        <li>
          Can be operated by keyboard
          <ul>
            <li>The user is not trapped on any element</li>
            <li>The user can bypass blocks of content not of interest</li>
            <li>The user can tab through elements in a logical order</li>
            <li>Focus does not trigger unexpected actions</li>
          </ul>
        </li>
        <li>
          Can be operated easily by users with screen magnification tools.
        </li>
        <li>
          Text can be enlarged up to 200% without the use of assistive
          technologies
        </li>
        <li>
          Can be easily understood by screen readers
          <ul>
            <li>
              The screen reader can correctly identify the interactive elements
            </li>
          </ul>
        </li>
        <li>
          The accordion should look good, and signal functionality to sighted
          users.
          <ul>
            <li>Meaning should not be indicated by colour alone</li>
            <li>
              Colour contrast meets the 4:5:1 requirement for small text and 3:1
              requirement for large text
            </li>
            <li>Supports dark-mode colour inversion</li>
          </ul>
        </li>
        <li>
          Should be performant
          <ul>
            <li>
              Where possible, rely on built-in behaviours (requiring less lines
              of code for implementation)
            </li>
          </ul>
        </li>
      </ul>
    </A11yChecklistWrapper>
  )
}

const A11yChecklistWrapper = styled.div`
  border-radius: 3px;
  background-color: ${colors.brandPrimaryLight};
  width: 100%;
  border: 2px solid ${colors.brandSecondary};
  box-shadow: 7px 6px 0 0 ${colors.brandSecondary};
  margin: 1.5rem 0;
  margin-bottom: 0;
  ul {
    padding: 1.5rem 2rem;
    li {
      font-family: "Roboto-Mono-Regular", monospace;
      list-style: disc;
      &:not(:last-of-type) {
        padding-bottom: 0.75rem;
      }
      li {
        list-style: circle;
      }
    }
  }
  ${breakpoint.md`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  `}
`

export default A11yChecklist
