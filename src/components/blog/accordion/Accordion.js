import React from "react";
import styled from "styled-components";
import * as colors from "../../../utils/colors"
import { breakpoint} from "../../../utils/breakpoints"

const Accordion = ({ children }) => {
  return <AccordionWrapper>{children}</AccordionWrapper>;
};

const AccordionWrapper = styled.div`
  border-radius: 3px;
  width: 100%;
  border: 2px solid ${colors.brandSecondary};
  box-shadow: 7px 6px 0 0 ${colors.brandSecondary};
  margin: 0.75rem 0;
  ${breakpoint.md`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  `}
`;

export default Accordion;
