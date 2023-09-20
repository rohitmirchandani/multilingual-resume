import React from 'react'
import './Exp.css'
import { useTranslation } from 'react-i18next';
function Exp() {
    const {t} = useTranslation('global');
    return (
      <div className="page exp">
          <div className='exp-div'>
            <h3>{t("exp.internship.title")}</h3>
            <p className='duration'>{t("exp.internship.duration")}</p>
            <p className='desc'>{t("exp.internship.description")}</p>
          </div>
          <hr/>
          <h3>{t("exp.projects.title")}</h3>
          <div className='exp-div'>
            <h4>{t("exp.projects.captionizer.title")}</h4>
            <p className='duration'>{t("exp.projects.captionizer.duration")}</p>
            <p className='desc'>{t("exp.projects.captionizer.description")}</p>
          </div>
          <hr/>
          <div className='exp-div'>
            <h4>{t("exp.projects.multiplayergame.title")}</h4>
            <p className='duration'>{t("exp.projects.multiplayergame.duration")}</p>
            <p className='desc'>{t("exp.projects.multiplayergame.description")}</p>
          </div>
          <hr/>
          <div className='exp-div'>
            <h4>{t("exp.projects.carrentalpagefreelancing.title")}</h4>
            <p className='duration'>{t("exp.projects.carrentalpagefreelancing.duration")}</p>
            <p className='desc'>{t("exp.projects.carrentalpagefreelancing.description")}</p>
          </div>
      </div>
      
    );
  }
  
  export default Exp;