export const View = state => [
  Hero(state),
  div([
    h1(Link({ to: '/', id: 'about' }, 'about @magic')),

    p('magic is a module based generator for static pages and serverless deployments.'),
    p([
      '10kb of html + css + javascript boilerplate make @magic minimal,',
      ' yet easily extendable and customizable',
    ]),

    p([
      '@magic has one client side dependency (spanning about 500 lines of code), ',
      Link({ to: 'https://github.com/jorgebucaran' }, 'jorge bucaran'),
      "'s excellent",
      Link({ to: 'https://hyperapp.dev' }, 'hyperapp'),
      ' library, which provides the foundational state machine that @magic is built upon.',
    ]),

    GitBadges('magic/core'),

    h2({ id: 'philosophy' }, 'philosophy'),

    p([
      '@magic makes it easy to stitch any kind of webapp together.',
      ' by providing simple, well documented, and self contained modules,',
      ' @magic enables you to create complex interfaces with minimal cognitive overhead.',
    ]),
    p([
      'for example a simple web form.',
      ' the css, client interaction, validation,',
      ' and even the server side functionality,',
      ' all in one file and one logical context.',
    ]),

    h2({ id: 'privacy' }, 'privacy'),
    p([
      "@magic does not spy on it's users.",
      ' in addition to being legally compliant to the european privacy laws,',
      ' we will always aim to do the ethical and right thing for all users of the web.',
    ]),
    p([
      'this means that we place your right to privacy above our want to know,',
      ' but at the same time this means that we place the rights of your users above your wants.',
    ]),

    p('we think that this is the only fair solution.'),
    Link({ to: '/privacy/', text: 'privacy policy' }),

    h2({ id: 'buzzwords' }, 'why should i use magic?'),

    h3('@magic is tiny'),
    p([
      '~10 kb html + css + javascript boilerplate.',
      ' usually, all the javascript in your homepage will be 30-60 kb big (after unpacking),',
      ' 10-30 kb get transmitted from the server to the client.',
      ' this complete page you are reading with all sub pages loads about 40kb of unpacked,',
      ' 15kb of gzipped javascript.',
    ]),

    h3('@magic works without javascript'),
    p([
      'most of the functionality works without javascript,',
      " some buttons and realtime user interactions obviously won't,",
      ' but @magic always tries to provide a non-javascript fallback via css.',
    ]),

    h3('@magic generates static pages'),
    p([
      'this makes free hosting (using github or gitlab pages) possible.',
      " and it's easy to ",
      Link({ to: '/getting-started/' }, 'get started.'),
    ]),

    p([
      '@magic publishes to ',
      Link({ to: 'https://github.com' }, 'github'),
      ', ',
      Link({ to: 'https://gitlab.com' }, 'gitlab'),
      ' and any other git-pages enabled hosting service.',
    ]),

    h3('serverless / faas'),
    p([
      'automagically generate ',
      ' serverless lambdas, derived from the ',
      Link({ to: 'https://github.com/magic-modules/' }, '@magic-modules'),
      ' you use in your pages.',
    ]),
    p([
      ' this makes visitor statistics, user authentication and authorization,',
      ' chat, and all other server side services possible.',
    ]),

    h2({ id: 'packages' }, 'packages'),
    p('@magic is quite a big ecosystem already and spans 4 github organizations.'),

    ul({ class: 'Packages' }, [
      li([
        h3(Link({ to: 'https://github.com/magic/' }, '@magic core utilities')),
        p([
          'the magic core utilities include ',
          Link({ to: 'https://magic.github.io/test/' }, 'a test framework'),
          ', a ',
          Link({ to: 'https://github.com/magic/css/' }, 'css-in-js'),
          ' library, markdown/html to @magic mjs ',
          Link({ to: 'https://github.com/magic/transmute/' }, 'transmutations'),
          ', a javascript ',
          Link({ to: 'https://github.com/magic/format/' }, 'prettifier'),
          ', many other ',
          Link({ to: 'https://github.com/magic/' }, 'libraries'),
          ' that get used throughout the magic ecosystem, and, of course, the ',
          Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
          ' package.',
        ]),
      ]),

      li([
        h3(Link({ to: 'https://github.com/magic-modules/' }, '@magic-modules')),
        p([
          'modules are the building blocks of your app.',
          ' since most of the pages built using @magic are documentation pages for @magic libraries,',
          ' a lot of the existing modules make it easier to document projects.',
        ]),
        Link({ to: '/modules/' }, 'Do you want to know more?'),
      ]),

      li([
        h3(Link({ to: 'https://github.com/magic-themes/' }, '@magic-themes')),
        p([
          'themes make pages look nice.',
          ' this page uses the prepared ',
          Link({ to: 'https://magic-themes.github.io/project' }, 'project'),
          ' theme.',
        ]),

        Link({ to: '/themes/' }, 'Do you want to know more?'),
      ]),

      li([
        h3(Link({ to: 'https://github.com/magic-libraries' }, '@magic-libraries')),
        p([
          '@magic-libraries provide browser functionality. they can handle ',
          Link({ to: 'https://github.com/magic-libraries/json' }, 'json'),
          ', provide a ',
          Link({ to: 'https://github.com/magic-libraries/db' }, 'database'),
          ', convert ',
          Link({ to: 'https://github.com/magic-libraries/graphql' }, 'graphql'),
          ', manage ',
          Link({ to: 'https://github.com/magic-libraries/uri' }, 'uri'),
          's, and ',
          Link({ to: 'https://github.com/magic-libraries/is' }, 'type check'),
        ]),

        Link({ to: '/libraries/' }, 'Do you want to know more?'),
      ]),
    ]),
  ]),
]
