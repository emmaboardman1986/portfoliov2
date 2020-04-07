import React from "react"
import styled from "styled-components"

const BodyText = ({ children }) => {
  return <BodyTextWrapper>{children}</BodyTextWrapper>
}

const BodyTextWrapper = styled.p`
  padding: 0.75rem 0;
  font-family: "Roboto-Mono-Regular";
`

export default BodyText
