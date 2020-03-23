import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import CarouselControl from "./CarouselControl"

export default function Carousel({ children }) {
  const totalItems = children.length
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [prevItemIndex, setPrevItemIndex] = useState(totalItems - 1)
  const [nextItemIndex, setNextItemIndex] = useState(currentItemIndex + 1)

  useEffect(() => {
    if (currentItemIndex === totalItems - 1) {
      setNextItemIndex(0)
    } else {
      setNextItemIndex(currentItemIndex + 1)
    }
    // If it's the first slide, set as the last slide, else -1
    if (currentItemIndex === 0) {
        setPrevItemIndex(totalItems - 1);
      } else {
        setPrevItemIndex(currentItemIndex - 1)
      }
  }, [currentItemIndex])

  return (
    <CarouselWrapper>
      <CarouselMain>
        {children.map((item, index) => (
          <CarouselItemWrapper
            key={index}
            className={
              index === currentItemIndex
                ? "active"
                : index === nextItemIndex
                ? "next"
                : index === prevItemIndex
                ? "prev"
                : ""
            }
          >
            {item}
          </CarouselItemWrapper>
        ))}
      </CarouselMain>

      <CarouselControl
        direction="next"
        onClick={() =>
          setCurrentItemIndex(
            currentItemIndex >= children.length - 1
              ? 0
              : currentItemIndex + 1
          )
        }
      >
        Next
      </CarouselControl>
      <CarouselControl
        direction="prev"
        currentItemIndex={currentItemIndex}
        onClick={() =>
          setCurrentItemIndex(
            currentItemIndex <= 0 ? children.length - 1 : currentItemIndex - 1
          )
        }
      >
        Prev
      </CarouselControl>
    </CarouselWrapper>
  )
}

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 90%;
  position: relative;
  * {
    box-sizing: border-box;
  }
`

const CarouselMain = styled.div`
  transform-style: preserve-3d;
`

const CarouselItemWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  margin: auto;
  padding: 1rem 4rem;
  z-index: 100;
  transition: transform 0.5s, opacity 0.5s, z-index 0.5s;
  &.active,
  &.initial {
    opacity: 1;
    position: relative;
    z-index: 900;
  }
  &.prev,
  &.next {
    z-index: 800;
    transform: ${props =>
      props.direction === "next" ? "translateX(100%)" : "translateX(-100%)"};
  }
`
