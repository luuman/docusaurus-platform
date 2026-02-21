import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ad7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd09'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c0e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '33c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'a69'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '495'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b3a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f5c'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'eae'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'fe2'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'cd0'),
            routes: [
              {
                path: '/electron/intro',
                component: ComponentCreator('/electron/intro', '26d'),
                exact: true,
                sidebar: "electronSidebar"
              },
              {
                path: '/rust/intro',
                component: ComponentCreator('/rust/intro', '919'),
                exact: true,
                sidebar: "rustSidebar"
              },
              {
                path: '/tauri/intro',
                component: ComponentCreator('/tauri/intro', '530'),
                exact: true,
                sidebar: "tauriSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
