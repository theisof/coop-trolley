# Coop Trolley

## Intro

The Coop Trolley supply internal and external partners with Coop agnostic frontend tools to speed up development and improve reusability.

Packages can be included as React components or used in plain HTML with the Coop stylesheet.

## Getting started

Internal users can utilize `git subtree` (see below) to push/pull components to project repositories. This allows for updating and improving components

External users should load components from `npm` (see below) or download `build/coop-trolley.css` for manual inclusion.

To run from this project start local server on `http://localhost:3001` with:
```
  npm i
  npm run start
```

### Git Subtree

From project root.

Add remote `git remote add -f -t master --no-tags coop-trolley https://github.com/theisof/coop-trolley`

Add subtree, run `git subtree add --prefix path/to/folder coop-trolley/master --squash`

Push to subtree, commit first and run `git subtree push --prefix=path/to/folder coop-trolley master`

Pull from subtree, run `git subtree pull --prefix path/to/folder coop-trolley master --squash`

### NPM

*Working on it...* [guide](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220)

## Prerequisite

Load fonts manually. Opens Sans and Roboto Slab can be loaded from [Google Fonts](https://fonts.google.com/selection?query=open&selection.family=Open+Sans:400,400i,600,600i,800|Roboto+Slab:400,700).

Standard: 'MarkOT' or 'Open Sans'  \
Display: 'Soho Std' or 'Roboto Slab'

*Todo: solution for new hosted font*

## Structure

Components are created with React and organised in folders inlcuding related files - except stylesheets.

Stylesheets are separated from React components so that they may be used with plain HTML for smaller projects. Include the `coop-trolley.css` once in the document `<head>`.

### To do

- Linting strategies
- Describe testing strategies
