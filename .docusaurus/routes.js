import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', 'ca4'),
    exact: true
  },
  {
    path: '/about/Alexis',
    component: ComponentCreator('/about/Alexis', '1ba'),
    exact: true
  },
  {
    path: '/about/Anastasiia',
    component: ComponentCreator('/about/Anastasiia', 'dca'),
    exact: true
  },
  {
    path: '/about/Andreas',
    component: ComponentCreator('/about/Andreas', '182'),
    exact: true
  },
  {
    path: '/about/Anutosh',
    component: ComponentCreator('/about/Anutosh', 'b3c'),
    exact: true
  },
  {
    path: '/about/Darian',
    component: ComponentCreator('/about/Darian', '399'),
    exact: true
  },
  {
    path: '/about/David',
    component: ComponentCreator('/about/David', '783'),
    exact: true
  },
  {
    path: '/about/Denisa',
    component: ComponentCreator('/about/Denisa', '157'),
    exact: true
  },
  {
    path: '/about/Fanny',
    component: ComponentCreator('/about/Fanny', 'bbb'),
    exact: true
  },
  {
    path: '/about/Florence',
    component: ComponentCreator('/about/Florence', 'c44'),
    exact: true
  },
  {
    path: '/about/Gabriela',
    component: ComponentCreator('/about/Gabriela', '273'),
    exact: true
  },
  {
    path: '/about/Greg',
    component: ComponentCreator('/about/Greg', 'd8e'),
    exact: true
  },
  {
    path: '/about/Hind',
    component: ComponentCreator('/about/Hind', 'ede'),
    exact: true
  },
  {
    path: '/about/Ian',
    component: ComponentCreator('/about/Ian', '087'),
    exact: true
  },
  {
    path: '/about/Isabel',
    component: ComponentCreator('/about/Isabel', '1c7'),
    exact: true
  },
  {
    path: '/about/Jeremy',
    component: ComponentCreator('/about/Jeremy', 'e19'),
    exact: true
  },
  {
    path: '/about/Joel',
    component: ComponentCreator('/about/Joel', '1c7'),
    exact: true
  },
  {
    path: '/about/Johan',
    component: ComponentCreator('/about/Johan', '015'),
    exact: true
  },
  {
    path: '/about/Julien',
    component: ComponentCreator('/about/Julien', '785'),
    exact: true
  },
  {
    path: '/about/Martin',
    component: ComponentCreator('/about/Martin', '53f'),
    exact: true
  },
  {
    path: '/about/Meriem',
    component: ComponentCreator('/about/Meriem', '925'),
    exact: true
  },
  {
    path: '/about/Nicolas',
    component: ComponentCreator('/about/Nicolas', 'c41'),
    exact: true
  },
  {
    path: '/about/Nour',
    component: ComponentCreator('/about/Nour', '2b4'),
    exact: true
  },
  {
    path: '/about/Romain',
    component: ComponentCreator('/about/Romain', 'bde'),
    exact: true
  },
  {
    path: '/about/Serge',
    component: ComponentCreator('/about/Serge', '39c'),
    exact: true
  },
  {
    path: '/about/Sylvain',
    component: ComponentCreator('/about/Sylvain', '840'),
    exact: true
  },
  {
    path: '/about/Thorsten',
    component: ComponentCreator('/about/Thorsten', 'b03'),
    exact: true
  },
  {
    path: '/about/Trung',
    component: ComponentCreator('/about/Trung', '670'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '656'),
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
