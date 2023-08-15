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
          <Obfuscate>How can i contact you?</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>Our emails can be found on the credits page.</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>I found a bug!</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>Good, please make a issue on our gitte repo: {repo}</Obfuscate>
        </div>
      </div>
    </>
  );
}

export default Support;
