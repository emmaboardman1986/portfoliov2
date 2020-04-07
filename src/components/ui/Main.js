import React from "react"
import styled from "styled-components"
import { breakpoint } from "../../utils/breakpoints"

const Main = ({ children }) => {
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  )
}


const MainWrapper = styled.main`
  margin-top: 100px;
  min-height: calc(92vh - 100px);
  box-sizing: border-box;
  ${breakpoint.md`
  margin-top: 0;
  `}
 `

export default Main
