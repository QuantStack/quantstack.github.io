import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', 'ca4'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '656'),
    exact: true
  },
  {
    path: '/blogs/Fanny',
    component: ComponentCreator('/blogs/Fanny', '4f1'),
    exact: true
  },
  {
    path: '/careers',
    component: ComponentCreator('/careers', '909'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'a03'),
    exact: true
  },
  {
    path: '/home',
    component: ComponentCreator('/home', '2eb'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', '21b'),
    exact: true
  },
  {
    path: '/projects/condaforge',
    component: ComponentCreator('/projects/condaforge', '675'),
    exact: true
  },
  {
    path: '/projects/jupyter',
    component: ComponentCreator('/projects/jupyter', '573'),
    exact: true
  },
  {
    path: '/projects/robotics',
    component: ComponentCreator('/projects/robotics', '913'),
    exact: true
  },
  {
    path: '/projects/xtensorxsimd',
    component: ComponentCreator('/projects/xtensorxsimd', 'c5e'),
    exact: true
  },
  {
    path: '/services',
    component: ComponentCreator('/services', 'e8b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f07'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '5b6'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7fc'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
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
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
