export const View = state =>
  div([
    h2('starting the ritual'),

    h3('cloning a page:'),
    p('to start your page, simply clone one of the example directories:'),
    ul([
      li([
        h3('minimal'),
        p('this is a minimal example for purists that want to start from (almost) scratch'),
        Pre(`
git clone https://github.com/magic/example-minimal
cd example-minimal
npm install
npm run dev
// goto localhost:2323
`),
        Link({ to: 'https://github.com/magic/example-minimal' }, 'minimal github'),
      ]),
      li([
        h3('interactive'),
        p('a small example showing off some client side interactions.'),
        Pre(`
git clone https://github.com/magic/example
cd example
npm install
npm run dev
// goto localhost:2323
`),
        Link({ to: 'https://github.com/magic/example' }, 'example github'),
      ]),
      li([
        h3('WIP - fancy'),
        p('a "fancy" page that does not look too nice, yet.'),
        Pre(`
git clone https://github.com/magic/example-fancy
cd example-fancy
npm install
npm run dev
// goto localhost:2323
`),
        Link({ to: 'https://github.com/magic/example-fancy' }, 'fancy github'),
      ]),
      li([
        h3('WIP - project'),
        p([
          'using ',
          Link({ to: 'https://github.com/magic-themes/project' }, '@magic-themes/project'),
          ', a good starter template for any project or company representation page.',
        ]),
        Link({ to: 'https://github.com/magic/example-project-page' }, 'project page github'),
      ]),
    ]),

    h3('from scratch'),

    p('go to a directory you want your page to live in'),

    h4('init'),
    p('lets create a git repository and package.json file in the current directory'),
    Pre(`
npm init -y
git init
git remote add origin git@github.com/yourName/repository
`),

    h4('cli'),
    p('install @magic using npm'),
    Pre('npm install -g @magic/core'),

    p('now, `magic` is available in your bash.'),
    p('execute magic to get a help overview:'),
    Pre('magic'),

    h4('config.mjs'),
    p('lets create /config.mjs, the file that tells @magic what to do.'),
    Pre(`
export default {
  ROOT: 'src',
  PUBLIC: 'docs',
}
    `),

    h4('src'),
    p('in the config file we told magic, that our page lives in the src directory.'),
    p('create the src directory now'),
    Pre('mkdir ./src'),

    h4('app.mjs'),
    p('then, create /src/app.mjs'),
    Pre(`
export const state = {
  title: 'app title',
}`),

    h4('page'),
    p('now, create the src/pages directory'),
    Pre('mkdir src/pages'),

    p('then, create src/pages/index.mjs'),
    Pre('export const View = (state) => p(state.title)'),

    p('now, run'),
    Pre('magic development'),

    p(['and load ', Link({ to: 'http://localhost:2323' }, 'localhost:2323' ),' in your browser']),
  ])
