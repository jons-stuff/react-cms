# React + Redux CMS demo

## Overview

This is a work in progress 2018 reboot (using React and Redux) of an established jQuery/PHP CMS platform.  The original platform has powered numerous e-commerce and brochure sites over many years (going back to circa 2009) and is still in active use today.

- [Project demo](https://jons-stuff.github.io/react-cms)
- [Detailed discussion on this project](https://jons-stuff.github.io/react-cms.html)

## Prerequisites

- npm [https://www.npmjs.com/](https://www.npmjs.com/)

## Installation

Clone the repo and then from the project's working directory:

`npm install`

To run the project locally:

`npm run start`

And then in a browser visit [http://localhost:8080/](http://localhost:8080/)

### Work in progress

Please note, this project is a work in progress:

- [x] Webpack 4 setup from scratch, optimised for production with js chunk splitting
- [x] ESLint setup with AirBNB defaults
- [x] Mock API serving demo data
- [x] List framework optimised for configuration of api driven lists with minimal boilerplate
- [x] Modular Redux reducers/selectors/actions to support list components.
- [x] Order Managament list page
- [x] Order details edit page
- [x] SPA routing
- [x] News, Vacancies and Log areas
- [ ] Optimised / lazy loading to support multiple pages and reduce initial bundle size
- [ ] Split React components into presentational / container components (partially complete)
- [ ] Replace 2009 era css with modern responsive markup
- [ ] Unit tests (where necessary) and feature tests (using Enzyme or Jest)
- [ ] Extract shared framework components into seperate npm project

### More information

For a detailed discussion on this project please take a look at [https://jons-stuff.github.io/react-cms.html](https://jons-stuff.github.io/react-cms.html)

See the project in action at [https://jons-stuff.github.io/react-cms](https://jons-stuff.github.io/react-cms)
