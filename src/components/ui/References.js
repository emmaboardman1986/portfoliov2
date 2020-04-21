import React from "react"
import styled from "styled-components"
import * as colors from "../../utils/colors"
import { breakpoint } from "../../utils/breakpoints"

const References = ({ children }) => {
  return (
    <ReferencesWrapper>
        {children}
    </ReferencesWrapper>
  )
}

const ReferencesWrapper = styled.aside`
    margin: 1rem;
    margin-top: 1.25rem;
    font-family: "BC-Falster-Grotesk-Regular", Arial;
    padding: 1rem;
    line-height: 1.4rem;
    background-color: ${colors.brandWhite};
    border: 1px dashed ${colors.brandSecondary};
    h3 {
      margin: 0.5rem 0;
    }
  ${breakpoint.md`
  box-sizing: border-box;
  width: 69%;
  margin-left: auto;
  margin-right: auto;
  `}
`

export default References
