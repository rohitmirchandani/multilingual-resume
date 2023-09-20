import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangSelector from './LangSelector'
import './AppHeader.css'

function AppHeader(props){
    const {t} = useTranslation('global')
    return (
    <div className='header'>
      <nav>
        <NavLink className="name" to="/">{t("header.name")}</NavLink>
        <ul>
          <li><NavLink to="/experience">{t("header.exp")}</NavLink></li>
          <li><NavLink to="/achievements">{t("header.achivs")}</NavLink></li>
        </ul>
      </nav>
      <LangSelector/>
    </div>
  )
}
export default AppHeader;