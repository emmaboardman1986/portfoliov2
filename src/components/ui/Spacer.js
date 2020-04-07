import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Spacer = ({ height, width }) => {
  return (
    <SpacerWrapper height={height} width={width}>
    </SpacerWrapper>
  )
}


const SpacerWrapper = styled.div`
  height: ${props =>
    props.height ? props.height : 0};
  width:  ${props =>
    props.width ? props.width : 0};
 `

Spacer.propTypes = {
    height: PropTypes.oneOf([
		'0.5rem',
		'0.75rem',
		'1rem',
		'1.25rem',
		'1.50rem',
		'1.75rem',
		'2rem',
    ]),
    width: PropTypes.oneOf([
		'0.5rem',
		'0.75rem',
		'1rem',
		'1.25rem',
		'1.50rem',
		'1.75rem',
		'2rem',
	]),
   
}


export default Spacer
