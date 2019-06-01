export const View = state => [
  h1([Link({ to: '/' }, '@magic')]),
  p('magic is a module/component based generator for static pages and serverless deployments.'),
  p(
    'goal of the project is to keep the client boilerplate footprint minimal yet easily extendable',
  ),

  GitBadges('magic/core'),

  ModuleList(),

  ThemeList(),

  LibraryList(),

  LightSwitch(state),
]
