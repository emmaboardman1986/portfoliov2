import React from "react"
import styled from "styled-components"
import * as colors from "../../../utils/colors"

const SkillAnnotation = ({ skillAnnotation }) => {
  return <SkillAnnotationWrapper>{skillAnnotation}</SkillAnnotationWrapper>
}

const SkillAnnotationWrapper = styled.p`
        text-align: center;
        color: ${colors.brandSecondary};
        margin: 0;
        padding: 0;
        padding-bottom: 2rem;
        margin-top: -2rem;
        &:before {
            content: "<---";
            margin-right: 1.5rem;
        }
        &:after {
            content: "--->";
            margin-left: 1.5rem;
        }
    } 
    `

export default SkillAnnotation
