import React from "react";
import styled from "styled-components";
import * as colors from "../../../utils/colors"

const AccordionContent = ({ children }) => {
  return <AccordionContentWrapper>{children}</AccordionContentWrapper>;
};

export const AccordionContentWrapper = styled.div`
  padding: 0.5rem;
  padding-bottom: 1.25rem;
  background-color: ${colors.brandPrimaryLight};
  border-bottom: 2px solid ${colors.brandSecondary};
  h4 {
    margin: 0;
    padding-top: 0.75rem;
    padding-bottom: 0.5rem;
  }
`;

export default AccordionContent;
