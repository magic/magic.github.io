module.exports = () => [
  h2('@magic'),
  p('magic is a module/component based generator for static pages and serverless deployments.'),
  p(
    'goal of the project is to keep the client boilerplate footprint minimal yet easily extendable',
  ),

  GitBadges({
    project: 'magic/core',
    appveyor: 'jaeh/core',
  }),

  ModuleList,

  ThemeList,

  LibraryList,
]
