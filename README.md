![CHEESE!](./src/assets/img/banner.png)

## &nbsp;

<h1 align="center">Flight Search App</h1>

## Table of Contents

- [Table of Contents](#)
- [About](#about)
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Third Party Dependencies](#third-party-dependencies)
- [Files And Directories Tree](#files-and-directories-tree)

## About

This application is a basic flight search app ui built with Next.js. It consists only one page. Technology stack includes:

- Next Js 14
- Tailwind CSS
- Typescript

## Prerequisites

- [Node : ^18.17.0](https://nodejs.org/en/download/)
- [npm : ^9.6.7](https://nodejs.org/en/download/)
- [Yarn : ^1.22.10](https://classic.yarnpkg.com/en/docs/install)
- [Git](https://git-scm.com/downloads)

## Installing

- Open terminal or command prompt

- Clone the project

  > ```bash
  > git clone https://github.com/meinjam/flight-search.git
  > cd flight-search
  > ```

- Install required libraries for project

> `npm install`\
> _or,_ \
> `yarn`

- Run the code after installing the libraries

> `npm run dev`\
> _or,_ \
> `yarn dev`

_Note: Now this will run the app in the development mode and Open http://localhost:3000 to view it in the default browser._

- Create build file

> `npm run build` \
> _or,_ \
> `yarn build`

## Third Party Dependencies

- **_clsx >= 2.1.1 :_** \
  _A utility for constructing className strings conditionally. Also serves as a faster & smaller drop-in replacement for the classnames module._

- **_sass >= 1.77.2 :_** \
  _A pure JavaScript implementation of Sass. Sass makes CSS fun again._

- **_tailwind-merge >= 2.3.0 :_** \
  _Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts._

- **_husky >= 8.0.0 :_** \
  _Git pre commit hook._

- **_prettier >= 3.2.5 :_** \
  _Prettier is an opinionated code formatter._

- **_prettier-plugin-tailwindcss >= 0.5.14:_** \
  _A prettier plugin to sorting tailwind cs classes._

## Files And Directories Tree

- **_.husky :_**\
  _Husky enhances your commits and more 🐶 woof! Automatically lint your commit messages, code, and run tests upon committing or pushing._
- **_public :_**\
  _Holds all public file._
- **_src :_** \
  _Holds js files which will be mostly edited._
  - **_app :_** \
    _Holds layout, loading, error and all pages._
  - **_assets :_** \
    _Holds the static files like scss amd images._
    - **_scss :_**\
      _Holds the required scss for app._
    - **_img :_** \
      _Holds the required images for pages and components._
  - **_components :_** \
    _Holds all the component file regarding every page._
  - **_lib :_** \
    _Holds all the libraries which used in this application._
- **_.gitignore_**
- **_.prettierignore_**
- **_.prettier_**
- **_next-env.d.ts_**
- **_next.config.mjs_**
- **_package-lock.json_**
- **_package.json_**
- **_postcss.config.mjs_**
- **_README.md_**
- **_tailwind.config.ts_**
- **_tsconfig.json_**
