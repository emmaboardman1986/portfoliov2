import styled from "styled-components"
import React from "react"
import * as colors from "../../utils/colors"
import { breakpoint } from "../../utils/breakpoints"
import PropTypes from "prop-types"

const BurgerButton = ({ isMenuExpanded, setIsMenuExpanded }) => {
  return (
    <BurgerButtonWrapper
      isMenuExpanded={isMenuExpanded}
      aria-expanded={isMenuExpanded}
      onClick={() => setIsMenuExpanded(!isMenuExpanded)}
    >
      <span></span>
      <span></span>
      <span></span>
    </BurgerButtonWrapper>
  )
}

const BurgerButtonWrapper = styled.button`
  background-color: ${props =>
    props.isMenuExpanded ? colors.brandWhite : "transparent"};
  display: flex;
  font-size: 1.5rem;
  position: fixed;
  z-index: 2;
  top: 5px;
  right: 5px;
  height: 50px;
  border: 0;
  width: 57px;
  margin-right: 3px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px #ffd29d;
  }
  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 45px;
    background: ${colors.brandSecondary};
    border-radius: 2px;
    opacity: 1;
    top: 0;
    right: 6px;
    margin-top: 0.75rem;
    transition: 0.25s ease-in-out;
    :nth-child(1) {
      top: 0px;
    }
    :nth-child(2) {
      top: 11px;
    }
    :nth-child(3) {
      top: 22px;
    }
  }
  &[aria-expanded="true"] {
    span {
      :nth-child(1) {
        transform: rotate(-45deg) translateY(7px) translateX(-9px);
      }
      :nth-child(2) {
        opacity: 0;
      }
      :nth-child(3) {
        transform: rotate(45deg) translateY(-8px) translateX(-9px);
      }
    }
  }
  ${breakpoint.sm`
    display: none;`}
`

export default BurgerButton
