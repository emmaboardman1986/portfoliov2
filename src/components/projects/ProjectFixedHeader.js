import styled from "styled-components"
import React from "react"
import * as colors from "../../utils/colors"
import { setFlex } from "../../utils/alignmentHelpers"
import { breakpoint } from "../../utils/breakpoints"
import ProjectNav from "../../components/projects/ProjectNav"
import ProjectTitle from "../../components/projects/ProjectTitle"


const ProjectFixedHeader = ({title}) => {
  return (
    <ProjectFixedHeaderWrapper>
     <ProjectTitle title={title}/>
     <ProjectNav />
    </ProjectFixedHeaderWrapper>
  )
}

const ProjectFixedHeaderWrapper = styled.div`
  position: fixed;
  top: 15vh;
  height: 16vh;
  left: 0;
  width: 100%;
  z-index: 999;
  ${breakpoint.md`
  top: 18vh;`}
`

export default ProjectFixedHeader
