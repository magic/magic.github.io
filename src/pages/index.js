module.exports = () => [
  h2('@magic'),
  p('magic is a module/component based generator for static pages and serverless deployments.'),
  p('goal of the project is to keep the client boilerplate footprint minimal yet easily extendable'),

  GitBadges({
    project: 'magic/core',
    appveyor: 'jaeh/core',
  }),

  h2({ id: 'magic-modules' }, '@magic-modules'),
  p([
    'the building blocks of @magic are modules that provide components.',
    ' @magic understands html5, css3 and ecmascript 6.',
  ]),
  ModuleList,


  h2({ id: 'magic-themes' }, '@magic-themes'),
  p([
    '@magic-themes are css-in-js files prepared for usage in @magic.',
    ' themes allow easy customization of your @magic app',
  ]),

  ThemeList,

  h2({ id: 'magic-client' }, '@magic-client'),
  p([
    '@magic-client libraries are scripts that provide maximal functionality with minimal footprint.',
  ]),

  ClientList,
]
