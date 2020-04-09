import React, { useState } from "react";
import styled from "styled-components";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";
import * as colors from "../../../utils/colors"

const AccordionSection = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setExpanded(!expanded);
    setHidden(!hidden);
  };
  return (
    <AccordionSectionWrapper>
      <AccordionTitle
        expanded={expanded}
        onClick={handleClick}
        title={title}
        sectionIsHidden={hidden}
      />
      {!hidden && <AccordionContent>{children}</AccordionContent>}
    </AccordionSectionWrapper>
  );
};

const AccordionSectionWrapper = styled.div`
  /* padding: 1rem; */
`;

export default AccordionSection;
