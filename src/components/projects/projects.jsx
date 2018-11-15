import React from 'react';
import { Project } from './project';
import Sites from './sites';
import styles from './projects.module.css';

export const Projects = () => {
  const projects = Sites.map(data => (
    <Project data={data} key={data.id} />
  ));
  return (
    <div id="projects" className={styles.container}>
      <h1 className={styles.h1}>
        <span className={styles.span} />
        {'Projekt'}
      </h1>

      {projects}

    </div>
  );
};
