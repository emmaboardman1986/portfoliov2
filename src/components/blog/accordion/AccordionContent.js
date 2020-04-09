import React from "react";
import styled from "styled-components";
import * as colors from "../../../utils/colors"

const AccordionContent = ({ children }) => {
  return <AccordionContentWrapper>{children}</AccordionContentWrapper>;
};

export const AccordionContentWrapper = styled.div`
  padding: 0.5rem;
  background-color: ${colors.brandPrimary};
`;

export default AccordionContent;
