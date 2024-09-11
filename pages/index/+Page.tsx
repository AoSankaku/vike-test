import React from "react";
import { Counter } from "./Counter.js";
import { Head } from "vike-react/Head";
import { Helmet } from "react-helmet";
import i18n from "../../i18n/configs.js";
import { useTranslation } from "react-i18next";

export default function Page() {

  const { t } = useTranslation()

  return (
    <>
      <h1>My Vike app</h1>
      <h2>{t("head.title")}</h2>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <button onClick={() => i18n.changeLanguage("ja")}>日語</button>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
    </>
  );
}
