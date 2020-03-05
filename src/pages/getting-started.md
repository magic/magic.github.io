<div>

## starting the ritual

### cloning a page:
to start your page, simply clone one of the example directories:

### minimal

this is a minimal example for purists that want to start from (almost) scratch

```
git clone https://github.com/magic/example-minimal
cd example-minimal
npm install
npm run dev
// goto localhost:2323
```

[minimal github](https://github.com/magic/example-minimal)

### interactive

a small example showing off some client side interactions.

```
git clone https://github.com/magic/example
cd example
npm install
npm run dev
// goto localhost:2323
```

[example github](https://github.com/magic/example)

### WIP - fancy

a "fancy" page that does not look too nice, yet.

```
git clone https://github.com/magic/example-fancy
cd example-fancy
npm install
npm run dev
// goto localhost:2323
```

[fancy github](https://github.com/magic/example-fancy)

### WIP - project

using [@magic-themes/project](https://github.com/magic-themes/project),
a good starter template for any project or company representation page.

[project page github](https://github.com/magic/example-project-page)

### from scratch

go to a directory you want your page to live in

#### init

lets create a git repository and package.json file in the current directory

```
npm init -y
git init
git remote add origin git@github.com/yourName/repository
```

#### cli

install @magic using npm

`npm install -g @magic/core`

now, magic is available in your bash.
execute the magic help task to get a help overview:

`magic --help`

#### config.mjs

lets create /config.mjs, the file that tells @magic what to do.

```
export default {
  ROOT: 'src',
  PUBLIC: 'docs',
}
```

#### src

in the config file we configured our page to live in the src directory.

create the src directory now

`mkdir ./src`

#### app.mjs

then, create /src/app.mjs

```
export const state = {
  title: 'app title',
}
```

#### page

now, create the src/pages directory

`mkdir src/pages`

then, create src/pages/index.md

`# \${state.title}`

now, run

`magic development`

and load [localhost:2323](http://localhost:2323) in your browser
