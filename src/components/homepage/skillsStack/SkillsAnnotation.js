import React from "react"
import styled from "styled-components"
import * as colors from "../../../utils/colors"
import { breakpoint } from "../../../utils/breakpoints"

const SkillAnnotation = ({ skillAnnotation }) => {
  return <SkillAnnotationWrapper>{skillAnnotation}</SkillAnnotationWrapper>
}

const SkillAnnotationWrapper = styled.p`
        text-align: center;
        font-size: 1rem;
        padding-top: 0.25rem;
        color: ${colors.brandSecondary};
        padding-bottom: 2rem;
        padding-left: 0.75rem;
        &:before {
            content: "<---";
            margin-right: 1.5rem;
        }
        &:after {
            content: "--->";
            margin-left: 1.5rem;
        }
    ${breakpoint.xs`
    font-size: 1.15rem;`}
    `

export default SkillAnnotation
