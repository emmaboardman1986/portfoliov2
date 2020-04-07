import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import * as colors from "../../utils/colors"
import { setFlex } from "../../utils/alignmentHelpers"

const Button = ({ text, link }) => {
  return <ButtonWrapper to={link}>{text}</ButtonWrapper>
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

const ButtonWrapper = styled(Link)`
  min-width: 150px;
  padding: 0.75rem 1.25rem;
  display: flex;
  ${setFlex()};
  border: 2px solid ${colors.brandSecondary};
  border-radius: 3px;
  background-color: ${colors.brandPrimary};
  font-family: "Roboto-Mono-Regular";
  font-size: 1rem;
  &:hover,
  &:focus {
    background-color: ${colors.brandWhite};
  }
  a {
    height: 100%;
    width: 100%;
    text-decoration: none;
    text-transform: capitalize;
    color: ${colors.brandSecondary};
  }
`

export default Button
