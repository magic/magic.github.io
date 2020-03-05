<Hero state></Hero>

<div id="about">

# about @magic

magic is a module based generator for interactive clients, apis and static pages.

this is also called a [jamstack](https://jamstack.org/), javascript, apis and markup.

less than 15kb of html + css + javascript boilerplate means @magic is minimal,
and the module based approach means that it is also easily extendable and customizable.

by creating html, css and javascript files,
@magic makes sure that your pages load as quickly as possible,
and your app will stay usable without javascript.

@magic has one client side dependency (spanning about 500 lines of code),
[jorge bucaran](https://github.com/jorgebucaran)'s excellent
[hyperapp](https://hyperapp.dev) library,
which provides the foundational state machine that @magic is built upon.

<GitBadges>magic/core</GitBadges>

## philosophy

@magic makes it easy to stitch any kind of webapp together.

by providing simple, well documented, and self contained modules,
@magic enables you to create complex interfaces with minimal cognitive overhead.

## audience

@magic will work in any team that has one or more developer / content creators / editors.

it is intended for organizational structures focused around small teams
working in [programmer anarchy](https://www.youtube.com/watch?v=tIxHmsWCd7g),
where every person / team is responsible for his or her own slice of the pie,
with minimal oversight and minimal organizational overhead.

some call it agile.

### workflow

the developers create custom components,
which the content creators use to create the actual content of the pages,
written in markdown.

once the content has been created,
the developer (or editor) creates a new bundle and pushes the changes to the page.

this allows every team member to spend time with the things they are good at,
mapping individual respons**A**bilities to a natural hierarchy of competency.

## privacy

@magic does not spy on it's users.
in addition to being legally compliant to the european privacy laws,
we will always aim to do the ethical and right thing for all users of the web.

this means that we place your right to privacy above our want to know,
but at the same time this means that we place the rights of your users above your wants.

we think that this is the only fair solution.

[privacy policy](/privacy/)

## #buzzwords why should i use magic?

### @magic is tiny

usually, all the javascript in your homepage will be 30-60 kb big (after unpacking),
10-30 kb get transmitted from the server to the client.

this complete page you are reading with all sub pages loads about 40kb of unpacked,
15kb of gzipped javascript.

### @magic works without javascript

most of the functionality works without javascript,
some buttons and realtime user interactions obviously won't,
but @magic always provides a non-javascript fallback that gets enhanced by js if possible.

### @magic generates static pages

this makes free hosting (using github or gitlab pages) possible.
and it's easy to
[get started](/getting-started/).

## free hosting

@magic publishes to
[github](https://github.com)
[gitlab](https://gitlab.com)
and any other git-pages enabled hosting service.

### serverless / faas

automagically generate
serverless lambdas, derived from the
[@magic-modules](https://github.com/magic-modules/)
you use in your pages.

this makes contact forms, visitor statistics, user authentication and authorization,
chat, and all other server side services possible.

## packages

@magic is quite a big ecosystem already and spans 5 github organizations.

<div class="Packages">

### [@magic core utilities](https://github.com/magic/)

the magic core utilities include
[a test framework](https://magic.github.io/test), a
[css-in-js](https://github.com/magic/css/) library,
markdown/html to @magic mjs [transmutations](https://github.com/magic/transmute/),
a javascript [prettifier](https://github.com/magic/format/),
many other [libraries](https://github.com/magic/),
that get used throughout the magic ecosystem, and, of course, the
[@magic/core](https://github.com/magic/core)
package.

### [@magic-examples](https://github.com/magic-examples/)

example pages to help getting started with new @magic projects.

[Do you want to know more?](https://magic-examples.github.io/)

### [@magic-modules](https://github.com/magic-modules/)

modules are the building blocks of your app.

since most of the pages built using @magic are documentation pages for @magic libraries,
a lot of the existing modules make it easier to document projects.

[Do you want to know more?](https://magic-modules.github.io/)

### [@magic-themes](https://github.com/magic-themes/)

themes make pages look nice.

this page uses the prepared [project](https://magic-themes.github.io/project) theme.

[Do you want to know more?](https://magic-themes.github.io/)


### [@magic-libraries](https://github.com/magic-libraries)

@magic-libraries provide browser functionality.
they can handle [json](https://github.com/magic-libraries/json/),
provide a [database](https://github.com/magic-libraries/db),
convert [graphql](https://github.com/magic-libraries/graphql),
parse and serialize [uri](https://github.com/magic-libraries/uri)'s,
and [type check](https://github.com/magic-libraries/is)

[Do you want to know more?](https://magic-libraries.github.io/)
