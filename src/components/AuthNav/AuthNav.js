import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}

export default AuthNav;
