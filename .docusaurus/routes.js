import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8c5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd2a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '229'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b74'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '339'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b0b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '98a'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'c00'),
    exact: true
  },
  {
    path: '/about/Alexis',
    component: ComponentCreator('/about/Alexis', '2cd'),
    exact: true
  },
  {
    path: '/about/Anastasiia',
    component: ComponentCreator('/about/Anastasiia', 'b18'),
    exact: true
  },
  {
    path: '/about/Andreas',
    component: ComponentCreator('/about/Andreas', '8e8'),
    exact: true
  },
  {
    path: '/about/Anutosh',
    component: ComponentCreator('/about/Anutosh', '67e'),
    exact: true
  },
  {
    path: '/about/Darian',
    component: ComponentCreator('/about/Darian', '31a'),
    exact: true
  },
  {
    path: '/about/David',
    component: ComponentCreator('/about/David', '568'),
    exact: true
  },
  {
    path: '/about/Denisa',
    component: ComponentCreator('/about/Denisa', '8fc'),
    exact: true
  },
  {
    path: '/about/Fanny',
    component: ComponentCreator('/about/Fanny', '371'),
    exact: true
  },
  {
    path: '/about/Florence',
    component: ComponentCreator('/about/Florence', '7aa'),
    exact: true
  },
  {
    path: '/about/Gabriela',
    component: ComponentCreator('/about/Gabriela', 'e12'),
    exact: true
  },
  {
    path: '/about/Greg',
    component: ComponentCreator('/about/Greg', 'afd'),
    exact: true
  },
  {
    path: '/about/Hind',
    component: ComponentCreator('/about/Hind', '610'),
    exact: true
  },
  {
    path: '/about/Ian',
    component: ComponentCreator('/about/Ian', 'd18'),
    exact: true
  },
  {
    path: '/about/Isabel',
    component: ComponentCreator('/about/Isabel', '280'),
    exact: true
  },
  {
    path: '/about/Jeremy',
    component: ComponentCreator('/about/Jeremy', '0a5'),
    exact: true
  },
  {
    path: '/about/Joel',
    component: ComponentCreator('/about/Joel', 'cfb'),
    exact: true
  },
  {
    path: '/about/Johan',
    component: ComponentCreator('/about/Johan', 'cbc'),
    exact: true
  },
  {
    path: '/about/Julien',
    component: ComponentCreator('/about/Julien', 'e4e'),
    exact: true
  },
  {
    path: '/about/Martin',
    component: ComponentCreator('/about/Martin', 'd35'),
    exact: true
  },
  {
    path: '/about/Meriem',
    component: ComponentCreator('/about/Meriem', '7b1'),
    exact: true
  },
  {
    path: '/about/Nicolas',
    component: ComponentCreator('/about/Nicolas', '152'),
    exact: true
  },
  {
    path: '/about/Nour',
    component: ComponentCreator('/about/Nour', 'b63'),
    exact: true
  },
  {
    path: '/about/Romain',
    component: ComponentCreator('/about/Romain', 'e2a'),
    exact: true
  },
  {
    path: '/about/Serge',
    component: ComponentCreator('/about/Serge', '1d9'),
    exact: true
  },
  {
    path: '/about/Sylvain',
    component: ComponentCreator('/about/Sylvain', '2c7'),
    exact: true
  },
  {
    path: '/about/Thorsten',
    component: ComponentCreator('/about/Thorsten', '5d3'),
    exact: true
  },
  {
    path: '/about/Trung',
    component: ComponentCreator('/about/Trung', 'ac9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '0f9'),
    exact: true
  },
  {
    path: '/careers',
    component: ComponentCreator('/careers', '45f'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', '45e'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', 'e5f'),
    exact: true
  },
  {
    path: '/projects/condaforge',
    component: ComponentCreator('/projects/condaforge', '7f7'),
    exact: true
  },
  {
    path: '/projects/jupyter',
    component: ComponentCreator('/projects/jupyter', 'c30'),
    exact: true
  },
  {
    path: '/projects/robotics',
    component: ComponentCreator('/projects/robotics', '8ec'),
    exact: true
  },
  {
    path: '/projects/xtensorxsimd',
    component: ComponentCreator('/projects/xtensorxsimd', '6aa'),
    exact: true
  },
  {
    path: '/services',
    component: ComponentCreator('/services', 'be9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'cc8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'aae'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a32'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1a9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
