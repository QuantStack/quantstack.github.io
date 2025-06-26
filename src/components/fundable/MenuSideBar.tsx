// src/components/CustomSidebar.js
import React from 'react';
import { useLocation } from '@docusaurus/router';


const menuItems = [
  { label: 'Overview', path: '/fundable' },
  { label: 'Eligibility', path: '/fundable/eligibility' },
  { label: 'Apply', path: '/fundable/apply' },
];

export default function MenuSidebar() {
  const location = useLocation();

  return (
    <nav className="custom-sidebar">
      <ul>
        {menuItems.map(item => (
          <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}