import React from 'react'
import { useTranslation } from 'react-i18next';

function Achivs() {
  const {t} = useTranslation('global');
  return (
      <div className="page achivs">
        <div className='achiv'>
          <h3>{t("achivs.codechef_ranking_1.description")}</h3>
          <p>{t("achivs.codechef_ranking_1.explanation")}</p>
        </div>
        <hr/>
        <div className='achiv'>
          <h3>{t("achivs.codechef_ranking_2.description")}</h3>
          <p>{t("achivs.codechef_ranking_2.explanation")}</p>
        </div>
        <hr/>
        <div className='achiv'>
          <h3>{t("achivs.leetcode_ranking.description")}</h3>
          <p>{t("achivs.leetcode_ranking.explanation")}</p>
        </div>
        <hr/>
        <div className='achiv'>
          <h3>{t("achivs.hackerrank_rating.description")}</h3>
          <p>{t("achivs.hackerrank_rating.explanation")}</p>
        </div>
        <hr/>
        <div className='achiv'>
          <h3>{t("achivs.problem_solving_count.description")}</h3>
          <p>{t("achivs.problem_solving_count.explanation")}</p>
        </div>
        <hr/>
        <div className='achiv'>
          <h3>{t("achivs.webdev_certification.description")}</h3>
          <p>{t("achivs.webdev_certification.explanation")}</p>
        </div>
      </div>
    );
}
    
export default Achivs