# Coop Trolley

## Intro

The Coop Trolley supply internal and external partners with Coop agnostic frontend tools to speed up development and improve reusability.

Packages can be included as React components or used in plain HTML with the Coop stylesheet.

## Getting started

Install from npm:

```
npm i @coop/trolley --save
```

Use with React like

```javascript
import { Button } from '@coop/trolley'

// Import the SASS-file once in the root of your app
import '@coop/trolley/dist/styles/coop-trolley.scss'

const MyApp = () => (
  <div>
    <Button>My Button</Button>
  </div>
)

export default MyApp
```


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
