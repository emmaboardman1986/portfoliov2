import React from "react"
import styled from "styled-components"

const Main = ({ children }) => {
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  )
}


const MainWrapper = styled.main`
  padding: 1rem;
 `

export default Main
