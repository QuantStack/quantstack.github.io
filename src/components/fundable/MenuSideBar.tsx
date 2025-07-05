// src/components/ScrollSidebar.js
import React, { useEffect, useState } from 'react';
import styles from "./styles.module.css";

const sections = [
  { id: 'jupyter-ecosystem', label: 'Jupyter Ecosystem' },
  { id: 'project-management', label: 'Project Management' },
];

export default function MenuSideBar() {
  const [activeSectionId, setActiveSectionId] = useState('jupyter-ecosystem');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSectionId(section.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.menu_sidebar_container}>
      <aside className={styles.menu_sidebar}>
        <ul style={{ listStyle: 'none', padding: "0px" }}>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`${activeSectionId === section.id ? styles.active_section : ''}`}
              >
                <span className={styles.menu_sidebar_indicator} />
                <span className={styles.menu_sidebar_item}>{section.label}</span>
              </a>

            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
