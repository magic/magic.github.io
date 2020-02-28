<Hero state></Hero>

<div id="about">

# about @magic

magic is a module based generator for static pages and serverless deployments.

less than 15kb of html + css + javascript boilerplate make @magic minimal,
yet easily extendable and customizable

@magic has one client side dependency (spanning about 500 lines of code),
[jorge bucaran](https://github.com/jorgebucaran)'s excellent ",
[hyperapp](https://hyperapp.dev) library,
which provides the foundational state machine that @magic is built upon.

<GitBadges>magic/core</GitBadges>

<h2 id='philosophy'>philosophy</h2>

@magic makes it easy to stitch any kind of webapp together.
by providing simple, well documented, and self contained modules,
@magic enables you to create complex interfaces with minimal cognitive overhead.


for example a simple web form.
the css, client interaction, validation,
and even the server side functionality,
all in one file and one logical context.


<h2 id='privacy'>privacy</h2>

@magic does not spy on it's users.
in addition to being legally compliant to the european privacy laws,
we will always aim to do the ethical and right thing for all users of the web.

this means that we place your right to privacy above our want to know,
but at the same time this means that we place the rights of your users above your wants.

we think that this is the only fair solution.

[privacy policy](/privacy/)

<h2 id='buzzwords'>why should i use magic?</h2>

### @magic is tiny

usually, all the javascript in your homepage will be 30-60 kb big (after unpacking),
10-30 kb get transmitted from the server to the client.

this complete page you are reading with all sub pages loads about 40kb of unpacked,
15kb of gzipped javascript.

### @magic works without javascript

most of the functionality works without javascript,
some buttons and realtime user interactions obviously won't,
but @magic always tries to provide a non-javascript fallback via css.

### @magic generates static pages

this makes free hosting (using github or gitlab pages) possible.
and it's easy to
[get started](/getting-started/).


@magic publishes to
[github](https://github.com)
[gitlab](https://gitlab.com)
and any other git-pages enabled hosting service.

### serverless / faas

automagically generate
 serverless lambdas, derived from the
[@magic-modules](https://github.com/magic-modules/)
you use in your pages.

this makes visitor statistics, user authentication and authorization,
chat, and all other server side services possible.

<h2 id='packages'>packages</h2>

@magic is quite a big ecosystem already and spans 4 github organizations.

<div class='Packages'>

* ### [@magic core utilities](https://github.com/magic/)

  the magic core utilities include
  [a test framework](https://magic.github.io/test), a
  [css-in-js](https://github.com/magic/css/) library,
  markdown/html to @magic mjs [transmutations](https://github.com/magic/transmute/),
  a javascript [prettifier](https://github.com/magic/format/),
  many other [libraries](https://github.com/magic/),
  that get used throughout the magic ecosystem, and, of course, the
  [@magic/core](https://github.com/magic/core)
  package.

* ### [@magic-modules](https://github.com/magic-modules/)

  modules are the building blocks of your app.
  since most of the pages built using @magic are documentation pages for @magic libraries,
  a lot of the existing modules make it easier to document projects.
  [Do you want to know more?](/modules/)

* ### [@magic-themes](https://github.com/magic-themes/)

  themes make pages look nice.
  this page uses the prepared [project](https://magic-themes.github.io/project) theme.

  [Do you want to know more?](/themes/)


* ### [@magic-libraries](https://github.com/magic-libraries)

  @magic-libraries provide browser functionality.
  they can handle [json](https://github.com/magic-libraries/json/),
  provide a [database](https://github.com/magic-libraries/db),
  convert [graphql](https://github.com/magic-libraries/graphql),
  parse and serialize [uri](https://github.com/magic-libraries/uri)'s,
  and [type check](https://github.com/magic-libraries/is)


  [Do you want to know more?](/libraries/)
