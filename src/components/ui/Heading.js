import React from 'react'
import PropTypes from 'prop-types'


const Heading = ({ variant, text, color }) => {
    const H = variant;
    return <H>{text}</H>
}

Heading.propTypes = {
    color: PropTypes.oneOf([
		'brandBody',
		'brandPrimary',
		'brandGrey',
		'brandWhite',
	]),
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    text: PropTypes.string.isRequired,
}

Heading.defaultProps = {
    variant: 'h1',
}

export default Heading;