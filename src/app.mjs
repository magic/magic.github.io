export const state = {
  title: '@magic',
  description: '@magic static and serverless webapp framework.',
  branding: '@magic',

  seo: {
    name: '@magic',
    url: `https://magic.github.io/`,
    about: 'magic is a jamstack generator.',
    image: `https://magic.github.io/magic-preview.jpg`,
    author: {
      '@type': 'person',
      name: 'Jascha Ehrenreich',
      jobTitle: 'Technomancer',
      image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
      url: 'https://jaeh.at',
    },
  },

  menu: [
    { to: '/', text: 'about' },
    { to: '/getting-started/', text: 'usage' },
    { to: '/why/', text: 'why?' },
  ],

  hero: {
    title: '@magic',
    description: 'jamstack generator',
    content: 'automagically generate and publish "jsomorphic" webapps.',
    menu: [
      { to: '/getting-started/', text: 'getting started' },
      { to: '/why/', text: 'why magic?' },
      { to: '/organizations/', text: 'organizations' },
    ],
  },
}
