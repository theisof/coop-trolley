# Coop Trolley

See demos [here](https://theisof.github.io/coop-trolley/)

## Intro

The Coop Trolley supply internal and external partners with Coop agnostic frontend tools to speed up development and improve reusability.

Packages can be included as React components or used in plain HTML with the Coop stylesheet.

## Getting started

Install from npm:

```
npm i @coop/trolley --save
```
Include the stylesheet once in your project

```javascript
// In Javascript
import '@coop/trolley/dist/coop-trolley.css'
```

or

```scss
// In SASS
@import '~@coop/trolley/dist/styles/coop-trolley';
```

Components can be used with React or - for static components - as plain HTML.

Use with React:

```javascript
import { Button } from '@coop/trolley'

const MyComponent = () => (
  <div>
    <Button>My Button</Button>
  </div>
)

export default MyComponent
```

Use with plain HTML:

```html
  <div class="coop-button">My Button</div>
```

### Git Subtree

Internal users can utilize `git subtree` to push/pull components to project repositories. This allows for updating and improving components on the fly and commit changes to the Coop Trolley repo.

From project root.

Add remote `git remote add -f -t master --no-tags coop-trolley https://github.com/theisof/coop-trolley`

Add subtree, run `git subtree add --prefix path/to/folder coop-trolley/master --squash`

Push to subtree, commit first and run `git subtree push --prefix=path/to/folder coop-trolley master`

Pull from subtree, run `git subtree pull --prefix path/to/folder coop-trolley master --squash`

## Prerequisite

Load fonts manually. Opens Sans and Roboto Slab can be loaded from [Google Fonts](https://fonts.google.com/selection?query=open&selection.family=Open+Sans:400,400i,600,600i,800|Roboto+Slab:400,700).

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i,800|Roboto+Slab:400,700" rel="stylesheet">
```

Standard: 'MarkOT' or 'Open Sans'  \
Display: 'Soho Std' or 'Roboto Slab'

*Todo: solution for new hosted font*

## Development

Run local server on `http://localhost:3001` with:
```
  npm i
  npm run start
```

To publish new version, increment version number in `package.json` and run `npm run publish_all`. Will update npm and [Github demo page](https://theisof.github.io/coop-trolley/).

To only update Github pages run `npm run publish_demo`

Get images from local folder by adding `?local-images` to url

## Testing

Tests are setup with [Jest](https://jestjs.io/en/) and [Enzyme](https://airbnb.io/enzyme/). Place test files in same folder as tested file with `.test.` in filename. Run locally with `npm run test`. Tests are auto triggered on build.

Use the following approach when testing:

UI:
- The goal is to eliminate the accidential removal of critical triggers, therefore...
- Apply smoke tests to key UI actions such as toggle buttons
- Don't test styling unless it impacts behaviour (like show/hiding a modal)
- Make snapshots for tested components

Utils:
- Make unit tests