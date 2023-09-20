import React from "react";
import { useTranslation } from 'react-i18next';
import './LangSelector.css'

function LangSelector(){
    const {i18n} = useTranslation('global');
    return (
        <div className="lang-selector">
          <label htmlFor="language">&#x1F310;
            <select id="language" onChange={e=>i18n.changeLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="fr">Français</option>
            </select>
          </label>
        </div>
    )
}

export default LangSelector;