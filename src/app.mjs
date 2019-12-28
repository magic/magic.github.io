export const state = {
  title: '@magic',
  description: '@magic static and serverless webapp framework.',
  logotext: '@magic',
  logo: '/logo.png',
  menu: [
    { to: '/', text: 'about @magic' },
    {
      to: '/magic-modules/',
      text: 'magic-modules',
      items: [
        { to: '#gl-magic-modules-li-accordion', text: 'accordion' },
        { to: '#gl-magic-modules-li-gdpr', text: 'gdpr' },
        { to: '#gl-magic-modules-li-git-badges', text: 'git-badges' },
        { to: '#gl-magic-modules-li-git-list', text: 'git-list' },
        { to: '#gl-magic-modules-li-hero', text: 'hero' },
        { to: '#gl-magic-modules-li-language-switch', text: 'language-switch' },
        { to: '#gl-magic-modules-li-library-list', text: 'library-list' },
        { to: '#gl-magic-modules-li-messages', text: 'messages' },
        { to: '#gl-magic-modules-li-module-list', text: 'module-list' },
        { to: '#gl-magic-modules-li-pre', text: 'pre' },
        { to: '#gl-magic-modules-li-sound-cloud', text: 'sound-cloud' },
        { to: '#gl-magic-modules-li-theme-list', text: 'theme-list' },
        { to: '#gl-magic-modules-li-video-embed', text: 'video-embed' },
      ],
    },
    {
      to: '/magic-themes/',
      text: 'magic-themes',
      items: [{ to: '#gl-magic-themes-li-docs', text: 'docs' }],
    },
    {
      to: '/magic-libraries/',
      text: 'magic-libraries',
      items: [
        { to: '#gl-magic-libraries-li-db', text: 'db' },
        { to: '#gl-magic-libraries-li-gql', text: 'gql' },
        { to: '#gl-magic-libraries-li-is', text: 'is' },
        { to: '#gl-magic-libraries-li-json', text: 'json' },
        { to: '#gl-magic-libraries-li-uri', text: 'uri' },
      ],
    },
  ],
}
