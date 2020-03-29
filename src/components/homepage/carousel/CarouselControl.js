import styled from "styled-components"
import React from "react"
import PropTypes from "prop-types"

const CarouselControl = ({ direction, onClick }) => {
  return (
    <CarouselControlWrapper direction={direction} onClick={onClick}>
    </CarouselControlWrapper>
  )
}

CarouselControl.propTypes = {
  direction: PropTypes.string.isRequired,
}

const CarouselControlWrapper = styled.button`
  position: absolute;
  top: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  /* transform: translateY(5%); */
  border-radius: 50%;
  cursor: pointer;
  z-index: 100; /* Sit on top of everything */
  border: 1px solid black;
  &:after {
    content: " ";
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    left: ${props =>
    props.direction === "next" ? "47%" : "54%"};
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    transform: ${props =>
    props.direction === "next" ? "translate(-50%, -50%) rotate(-45deg)" : "translate(-50%, -50%) rotate(135deg)"};
  }
  left:  ${props =>
    props.direction === "next" ? "" : 0}; 
    right:  ${props =>
    props.direction === "next" ? 0 : ""};
`

export default CarouselControl;
