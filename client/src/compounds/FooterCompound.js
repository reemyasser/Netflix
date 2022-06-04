import React from "react";
import FooterWrapper from "../components/Footer/FooterWrapper";
import FooterTitle from "../components/Footer/FooterTitle";
import FooterRow from "../components/Footer/FooterRow";
import FooterColumn from "../components/Footer/FooterColumn";
import FooterLink from "../components/Footer/FooterLink";

import { useTranslation } from 'react-i18next';



  
    
  
function FooterCompound() {
  const { t, i18n } = useTranslation();
   
 
  return (
    
    <FooterWrapper>
      <FooterTitle>{t("Questions? Contact us.")}</FooterTitle>
      <FooterRow>
        <FooterColumn>
          
          <FooterLink>{t("FAQ")}</FooterLink>
          <FooterLink>{t("Investor Relations")}</FooterLink>
          <FooterLink>{t("Privacy")}</FooterLink>
          <FooterLink>{t("Speed Test")}</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>{t("Help Center")}</FooterLink>
          <FooterLink>{t("Jobs")}</FooterLink>
          <FooterLink>{t("Cookie Preferences")}</FooterLink>
          <FooterLink>{t("Legal Notices")}</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>{t("Account")}</FooterLink>
          <FooterLink>{t("Ways to Watch")}</FooterLink>
          <FooterLink>{t("Corporate Information")}</FooterLink>
          <FooterLink>{t("Netflix Originals")}</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterLink>{t("Media Center")}</FooterLink>
          <FooterLink>{t("Terms of Use")}</FooterLink>
          <FooterLink>{t("Contact Us")}</FooterLink>
        </FooterColumn>
      </FooterRow>
    </FooterWrapper>
    
);
  
  }

  
  
export default FooterCompound;
