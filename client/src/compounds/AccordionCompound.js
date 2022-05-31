import React from "react";
import AccordionWrapper from "../components/Accordion/AccordionWrapper";
import AccordionTitle from "../components/Accordion/AccordionTitle";
import AccordionItem from "../components/Accordion/AccordionItem";
import AccordionHeader from "../components/Accordion/AccordionHeader";
import AccordionBody from "../components/Accordion/AccordionBody";
import FAQData from "../data/faqs.json";
import { useTranslation } from 'react-i18next';


function AccordionCompound() {

  const { t, i18n } = useTranslation();
  return (
    <AccordionWrapper>
      <AccordionTitle>{t("Frequently Asked Questions")}</AccordionTitle>
      {FAQData.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader>{item.header}</AccordionHeader>
          <AccordionBody>{item.body}</AccordionBody>
        </AccordionItem>
      ))}

    </AccordionWrapper>
  );
}

export default AccordionCompound;