import React from 'react'
import { useTranslation } from 'react-i18next';
function Home() {
  const {t} = useTranslation("global")
  return (
    <div className="page home">
        <p>{t("intro.interest")}</p>
        <p>{t("intro.experience")}</p>
        <p>{t("intro.problemSolving")}</p>
        <p>{t("intro.internship")}</p>
        <p>{t("intro.traits")}</p>
        <p>{t("intro.conclusion")}</p>
    </div>
  );
}

export default Home;