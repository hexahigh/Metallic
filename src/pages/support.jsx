import React from "react";
import Nav from "../components/nav.jsx";
import Head from "../components/head.jsx";
import Obfuscate from "../components/obfuscate.jsx";
import { useTranslation } from 'react-i18next';
import { repo } from "../consts";

function Support() {
  const { t } = useTranslation("support");

  return (
    <>
      <Head defaultTitle="support"></Head>
      <Nav />
      <div className="itemscontainer">
        <div className="itemsection">
          <Obfuscate>{t("faq")}</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("questions.0.title")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>{t("questions.0.answer")}</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("questions.1.title")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>{t("questions.1.answer")} {repo}</Obfuscate>
        </div>
      </div>
    </>
  );
}

export default Support;
