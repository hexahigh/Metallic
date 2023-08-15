import React from "react";
import Nav from "../components/nav.jsx";
import Head from "../components/head.jsx";
import { repo } from "../consts";
import Obfuscate from "../components/obfuscate.jsx";
import { useTranslation } from 'react-i18next';

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
