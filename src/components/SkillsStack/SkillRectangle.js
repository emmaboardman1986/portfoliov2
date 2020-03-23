import React from 'react'
import PropTypes from 'prop-types'
import SkillRectangleSVG from '../../../static/assets/skillRectangle.svg'
import styled from "styled-components"
import { setFlex} from "../../utils/alignmentHelpers"


const SkillRectangle = ({ skill }) => {
    return (
    <SkillRectangleWrapper>
        <SkillRectangleSVG />
        <div className="rectangle-face">
        <span>{skill}</span>
        </div>
       
    </SkillRectangleWrapper>
    )
}

SkillRectangle.propTypes = {
   
    text: PropTypes.string.isRequired,
}

const SkillRectangleWrapper = styled.div`
    position: relative;
    .rectangle-face {
        position: absolute;
        top: 27px;
        left: 3px;
        width: 326px;
        height: 77px;
        display: flex;
        ${setFlex()};
    }
    span {
       
    }
    g {
        fill: ${props => props.color}
    }`

export default SkillRectangle;