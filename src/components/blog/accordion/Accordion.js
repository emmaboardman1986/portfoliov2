import React from "react";
import styled from "styled-components";
import * as colors from "../../../utils/colors"

const Accordion = ({ children }) => {
  return <AccordionWrapper>{children}</AccordionWrapper>;
};

const AccordionWrapper = styled.div`
  border-radius: 6px;
  width: 100%;
  border: 2px solid ${colors.peachLight};
`;

export default Accordion;
