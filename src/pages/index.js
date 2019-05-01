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

  h2({ id: 'magic-modules' }, Link({ to: 'https://github.com/magic-modules/' }, '@magic-modules')),
  p('modules are the building blocks of @magic.'),
  ModuleList,

  h2({ id: 'magic-themes' }, Link({ to: 'https://github.com/magic-modules/' }, '@magic-themes')),
  p([
    '@magic-themes are css-in-js files prepared for usage in @magic.',
    ' themes allow easy customization of your @magic app',
  ]),

  ThemeList,

  h2({ id: 'magic-client' }, Link({ to: 'https://github.com/magic-modules/' }, '@magic-client')),
  p([
    '@magic-client libraries are scripts that provide maximal functionality with minimal footprint.',
  ]),

  ClientList,
]
