export const state = {
  title: '@webboot - privacy policy',
}

export const View = () =>
  div([
    h2('privacy policy'),

    h2("Do's"),

    h3('encourage anonymity'),
    p('most of our services will include measures that prevent us from knowing your ip address.'),
    p([
      'since the threat vector in those cases are we,',
      ' @magic, it usually is sufficient to relay all requests through anonymizer networks.',
    ]),

    p([
      'for a chance at actual anonymity,',
      ' usage of tools like tor is encouraged,',
      ' and our networks will not block requests from those networks.',
    ]),

    h2("Dont's"),

    p([
      'we will never, under no circumstances,',
      ' share information about our users with ',
      b('any'),
      ' third parties.',
    ]),

    h3('canary:'),
    p([
      'as long as ',
      Link({ to: '/canary/', text: 'this canary link works' }),
      ' we have not shared any data about our users with anyone.',
    ]),

    h3('local data'),
    p('personal data we access on your machine and do not send anywhere, ever:'),

    ol([
      li('your git config user.email (never uploaded)'),
      li('your public gpg key associated with that email.'),
      li('your gpg keys published on github or gitlab.'),
    ]),

    p('thats it.'),
  ])
