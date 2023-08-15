import React from "react";
import Nav from "../components/nav.jsx";
import Head from "../components/head.jsx";
import Obfuscate from "../components/obfuscate.jsx";
import { useTranslation } from 'react-i18next';
import { leadEmail, secondEmail } from "../consts";

function Support() {
  const { t } = useTranslation("credits");

  return (
    <>
      <Head defaultTitle="credits"></Head>
      <Nav />
      <div className="itemscontainer">
        <div className="itemsection">
          <Obfuscate>{t("title")}</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("developers")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>Boofdev({leadEmail}) - {t("mainDevText")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>tomotow({secondEmail}) - {t("devText")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>Nebelung-dev - Creating the original proxy</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("proxies")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>Divide - TOMP</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>Caracal.js - Ultraviolet</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>Divide - Stomp</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>Ender - DIP</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>EndlessVortex - Aero</Obfuscate>
        </div>
        <div className="itemtitle">
          <Obfuscate>{t("others")}</Obfuscate>
        </div>
        <div className="itemtext">
          <Obfuscate>{t("othersMessage")}</Obfuscate>
        </div>
      </div>
    </>
  );
}

export default Support;
