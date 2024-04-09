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
    path: '/contact',
    component: ComponentCreator('/contact', '45e'),
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
