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
    path: '/About/Alexis',
    component: ComponentCreator('/About/Alexis', '6f8'),
    exact: true
  },
  {
    path: '/About/Anastasiia',
    component: ComponentCreator('/About/Anastasiia', 'b1d'),
    exact: true
  },
  {
    path: '/About/Andreas',
    component: ComponentCreator('/About/Andreas', '361'),
    exact: true
  },
  {
    path: '/About/Anutosh',
    component: ComponentCreator('/About/Anutosh', '387'),
    exact: true
  },
  {
    path: '/About/Darian',
    component: ComponentCreator('/About/Darian', 'b29'),
    exact: true
  },
  {
    path: '/About/David',
    component: ComponentCreator('/About/David', '528'),
    exact: true
  },
  {
    path: '/About/Denisa',
    component: ComponentCreator('/About/Denisa', '764'),
    exact: true
  },
  {
    path: '/About/Fanny',
    component: ComponentCreator('/About/Fanny', '621'),
    exact: true
  },
  {
    path: '/About/Florence',
    component: ComponentCreator('/About/Florence', '49f'),
    exact: true
  },
  {
    path: '/About/Gabriela',
    component: ComponentCreator('/About/Gabriela', '95f'),
    exact: true
  },
  {
    path: '/About/Greg',
    component: ComponentCreator('/About/Greg', '49b'),
    exact: true
  },
  {
    path: '/About/Hind',
    component: ComponentCreator('/About/Hind', '8ed'),
    exact: true
  },
  {
    path: '/About/Isabel',
    component: ComponentCreator('/About/Isabel', '673'),
    exact: true
  },
  {
    path: '/About/Jeremy',
    component: ComponentCreator('/About/Jeremy', 'c30'),
    exact: true
  },
  {
    path: '/About/Joel',
    component: ComponentCreator('/About/Joel', '71c'),
    exact: true
  },
  {
    path: '/About/Johan',
    component: ComponentCreator('/About/Johan', '1ad'),
    exact: true
  },
  {
    path: '/About/Julien',
    component: ComponentCreator('/About/Julien', 'c30'),
    exact: true
  },
  {
    path: '/About/Martin',
    component: ComponentCreator('/About/Martin', 'b41'),
    exact: true
  },
  {
    path: '/About/Meriem',
    component: ComponentCreator('/About/Meriem', '8a6'),
    exact: true
  },
  {
    path: '/About/Nicolas',
    component: ComponentCreator('/About/Nicolas', 'c64'),
    exact: true
  },
  {
    path: '/About/Nour',
    component: ComponentCreator('/About/Nour', 'b9a'),
    exact: true
  },
  {
    path: '/About/Sylvain',
    component: ComponentCreator('/About/Sylvain', '319'),
    exact: true
  },
  {
    path: '/About/Thorsten',
    component: ComponentCreator('/About/Thorsten', 'e65'),
    exact: true
  },
  {
    path: '/About/Trung',
    component: ComponentCreator('/About/Trung', 'a2c'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '0a0'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '247'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'eb5'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'dcc'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'bda'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'fb6'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'a9a'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '40c'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'ad8'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '18d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a80'),
    exact: true
  },
  {
    path: '/careers',
    component: ComponentCreator('/careers', '45f'),
    exact: true
  },
  {
    path: '/others',
    component: ComponentCreator('/others', '207'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', 'e5f'),
    exact: true
  },
  {
    path: '/services',
    component: ComponentCreator('/services', 'be9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '644'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '455'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '39e'),
            routes: [
              {
                path: '/docs/hello',
                component: ComponentCreator('/docs/hello', '7a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
