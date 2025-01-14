import React from "react";
import { Link } from "react-router-dom";
import Obfuscate from "./obfuscate.jsx";
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation("home");

    return (
        <div className="footer">
        <div>
          <Link className="footersides link" to="/4.html">
            <Obfuscate>{t("privacy")}</Obfuscate>
          </Link>
          <Link className="footersides link" to="/5.html">
            <Obfuscate>{t("credits")}</Obfuscate>
          </Link>
          <Link className="footersides link" to="/6.html">
            <Obfuscate>{t("FAQ")}</Obfuscate>
          </Link>
        </div>
        <div className="footermiddle">
          <Obfuscate>Thorium - </Obfuscate>{new Date().getFullYear()}
        </div>
        <div>
        </div>
      </div>
    )
}

export default Footer;