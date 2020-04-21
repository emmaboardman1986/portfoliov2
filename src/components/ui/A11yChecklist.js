import React from "react"
import styled from "styled-components"
import * as colors from "../../utils/colors"
import { breakpoint } from "../../utils/breakpoints"

const A11yChecklist = ({ children }) => {
  return (
    <A11yChecklistWrapper>
      <h3 class="visually-hidden">Accessibility Checklist</h3>
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
      <aside>
      <h3>Accessibility Checklist References</h3><a href="https://romeo.elsevier.com/accessibility_checklist" target="_blank">Elsevier Accessibility Checklist</a>;  <a href="https://www.w3.org/TR/wai-aria-practices/" target="_blank">WAI-ARIA Authoring Practices 1.1</a>;   <a href="https://inclusive-components.design/" target="_blank">Heydon Pickering's Inclusive Components</a>;  <a href="https://www.hassellinclusion.com/blog/" target="_blank">Hassell Inclusion Blog</a>; <a href="https://w3c.github.io/html-aria/" target="_blank">W3C Editor's Draft: ARIA in HTML</a>

      </aside>
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
  aside {
    margin: 1rem;
    font-family: "BC-Falster-Grotesk-Regular", Arial;
    padding: 1rem;
    line-height: 1.4rem;
    background-color: ${colors.brandWhite};
    border: 1px dashed ${colors.brandSecondary};
    h3 {
      margin: 0.5rem 0;
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
