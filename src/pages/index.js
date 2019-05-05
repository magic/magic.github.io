module.exports = () => [
  h1('@magic'),
  p('magic is a module/component based generator for static pages and serverless deployments.'),
  p(
    'goal of the project is to keep the client boilerplate footprint minimal yet easily extendable',
  ),

  h2('git badges'),
  GitBadges({
    project: 'magic/core',
    appveyor: 'jaeh/core',
  }),

  h3('plugins'),

  ModuleList,

  ThemeList,

  LibraryList,
]
