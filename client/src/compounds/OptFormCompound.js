import React from "react";
import OptFormWrapper from "../components/OptForm/OptFormWrapper";
import OptFormText from "../components/OptForm/OptFormText";
import OptFormEmail from "../components/OptForm/OptFormEmail";
import OptFormButton from "../components/OptForm/OptFormButton";
import { useTranslation } from 'react-i18next';
function OptFormCompound() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <OptFormText>
      {t("Ready to watch? Enter your email to create or restart your membership.")}
      </OptFormText>
      <OptFormWrapper>
        <OptFormEmail placeholder={t("Email Address")} />
        <OptFormButton>{t("Get Started")}</OptFormButton>
      </OptFormWrapper>
    </>
  );
}

export default OptFormCompound;