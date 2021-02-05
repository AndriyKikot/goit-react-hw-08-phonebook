import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>
      Welcome to Phonebook
      <p className={styles.subtitle}>
        register or login to start using the contact book
      </p>
    </h1>
  </div>
);

export default HomeView;
