import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/quantstack.github.io/about',
    component: ComponentCreator('/quantstack.github.io/about', '231'),
    exact: true
  },
  {
    path: '/quantstack.github.io/blog',
    component: ComponentCreator('/quantstack.github.io/blog', '4ed'),
    exact: true
  },
  {
    path: '/quantstack.github.io/blogs/Fanny',
    component: ComponentCreator('/quantstack.github.io/blogs/Fanny', '880'),
    exact: true
  },
  {
    path: '/quantstack.github.io/careers',
    component: ComponentCreator('/quantstack.github.io/careers', 'b61'),
    exact: true
  },
  {
    path: '/quantstack.github.io/contact',
    component: ComponentCreator('/quantstack.github.io/contact', 'cc6'),
    exact: true
  },
  {
    path: '/quantstack.github.io/home',
    component: ComponentCreator('/quantstack.github.io/home', '127'),
    exact: true
  },
  {
    path: '/quantstack.github.io/projects',
    component: ComponentCreator('/quantstack.github.io/projects', '2db'),
    exact: true
  },
  {
    path: '/quantstack.github.io/projects/condaforge',
    component: ComponentCreator('/quantstack.github.io/projects/condaforge', '8bc'),
    exact: true
  },
  {
    path: '/quantstack.github.io/projects/jupyter',
    component: ComponentCreator('/quantstack.github.io/projects/jupyter', '7f5'),
    exact: true
  },
  {
    path: '/quantstack.github.io/projects/robotics',
    component: ComponentCreator('/quantstack.github.io/projects/robotics', '2c1'),
    exact: true
  },
  {
    path: '/quantstack.github.io/projects/xtensorxsimd',
    component: ComponentCreator('/quantstack.github.io/projects/xtensorxsimd', 'a48'),
    exact: true
  },
  {
    path: '/quantstack.github.io/services',
    component: ComponentCreator('/quantstack.github.io/services', '2d6'),
    exact: true
  },
  {
    path: '/quantstack.github.io/docs',
    component: ComponentCreator('/quantstack.github.io/docs', 'ece'),
    routes: [
      {
        path: '/quantstack.github.io/docs',
        component: ComponentCreator('/quantstack.github.io/docs', '5d0'),
        routes: [
          {
            path: '/quantstack.github.io/docs',
            component: ComponentCreator('/quantstack.github.io/docs', 'a54'),
            routes: [
              {
                path: '/quantstack.github.io/docs/intro',
                component: ComponentCreator('/quantstack.github.io/docs/intro', 'b2a'),
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
    path: '/quantstack.github.io/',
    component: ComponentCreator('/quantstack.github.io/', 'eb1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
