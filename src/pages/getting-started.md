<div>

## starting the ritual

### cloning a page:
to start your page, simply clone one of the example directories:


* ### minimal

  this is a minimal example for purists that want to start from (almost) scratch

  <Pre>
git clone https://github.com/magic/example-minimal
cd example-minimal
npm install
npm run dev
// goto localhost:2323
  </Pre>

  [minimal github](https://github.com/magic/example-minimal)


* ### interactive

  a small example showing off some client side interactions.

  <Pre>
git clone https://github.com/magic/example
cd example
npm install
npm run dev
// goto localhost:2323
  </Pre>

  [example github](https://github.com/magic/example)


* ### WIP - fancy

  a "fancy" page that does not look too nice, yet.

  <Pre>
git clone https://github.com/magic/example-fancy
cd example-fancy
npm install
npm run dev
// goto localhost:2323
  </Pre>

  [fancy github](https://github.com/magic/example-fancy)

* ### WIP - project

  using [@magic-themes/project](https://github.com/magic-themes/project),
  a good starter template for any project or company representation page.',

  [project page github](https://github.com/magic/example-project-page)

### from scratch

go to a directory you want your page to live in

#### init

lets create a git repository and package.json file in the current directory

<Pre>
npm init -y
git init
git remote add origin git@github.com/yourName/repository
</Pre>

#### cli

install @magic using npm

<Pre>npm install -g @magic/core</Pre>

now, magic is available in your bash.
execute the magic help task to get a help overview:

<Pre>magic --help</Pre>

#### config.mjs

lets create /config.mjs, the file that tells @magic what to do.

<Pre>
export default {
  ROOT: 'src',
  PUBLIC: 'docs',
}
</Pre>

#### src

in the config file we configured our page to live in the src directory.

create the src directory now

<Pre>mkdir ./src</Pre>

#### app.mjs

then, create /src/app.mjs

<Pre>
export const state = {
  title: 'app title',
}
</Pre>

#### page

now, create the src/pages directory

<Pre>mkdir src/pages</Pre>

then, create src/pages/index.md

<Pre># \\\${state.title}</Pre>

now, run

<Pre>magic development</Pre>

and load [localhost:2323](http://localhost:2323) in your browser
