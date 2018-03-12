# Coop Trolley

*This document is a work in progress.*

## Intro

The Coop Trolley supply internal and external partners with Coop agnostic frontend tools to speed up development and improve reusability.

The packages of this repo are available as npm modules and should be installed from there. See [Coop's npm profile](https://www.npmjs.com/org/coop) for full list of components.

Packages can be included as React components or stylesheets only. More info on this to come...

### Running locally with Storybook

See components examples with Storybook and develop locally. Download this repo and install [Storybook cli tools](https://github.com/storybooks/storybook) and [gulp cli](https://gulpjs.com/)

Then run
```
npm i
npm run start
```

#### Prereqs

Include fonts:

Standard: 'MarkOT', 'Open Sans', sans-serif \
Display: 'Soho Std', 'Roboto Slab', sans-serif

Assumes use with Webpack on the receiving end that minifys etc. for production.

---

## Styleguide

Coop has two primary web application types - SPA and CMS solutions - which is described further below.

### General notes
- React for advanced JavaScript views
- No jQuery
- ES6/7 when writing JavaScript (Babel)
- BEM syntax for CSS class names
- SCSS for compiling CSS

### Single Page App (SPA)

- Build SPA's with React.
- Base projects on Create React App and avoid ejecting.
- Styling through JavaScript *(Todo: consider inline alternatives)*
- Use "container with dump components" pattern
- Stateless components when possible
- Redux for state management
- Redux-Saga for side effects
- Use es6 spread syntax to shortcut props

##### Component structure:
1. Imports
2. Component
3. Private helpers
4. Styles
5. Export default

*Example:*

```javascript
import React from 'react'
import Radium from 'radium'

const MyComponent = ({ someVariable }) => (
  <div style={styles.wrap}>
    {calcSomething(someVariable)}
  </div>
)

const calcSomething = someVariable => {
  return calculatedVariable
}

const styles = {
  wrap:{
    someStyle: 0
  }
}

export default Radium(MyComponent)

```

### CMS solutions

Frontend implementation in backend rendered applications is CMS agnostic though most Coop solution run on Umbraco.

Write CSS in SASS and follow the [BEM](http://getbem.com/) naming convention.

Use Webpack to compile assets. Configs will come later.

To keep stylesheets searchable and skimmable avoid nesting and don't prefix elements and modifiers with ampersands in SASS:

*Example*

```SCSS
// bad

.my-block {
  &__my-element {
    color: red;
  }

  &--my-modifier {
    color: green;
  }
}

// Good

.my-block__my-element {
  color: red;
}

.my-block--my-modifier {
  color: green;
}
```

**Exceptions**: pseudo classes and context versions should be nested

*Example:*

```SCSS
.my-block {
  &:hover {
    color: yellow;
  }
}

.my-special-context-block {
  .my-block {
    color: blue;
  }
}
```
### Npm modules

Module paths are saved in `entryPaths.js` for webpack to pick up when building. Storybook compliant React components go into the `componentPaths` array.

*Note that `@coop/config` module bypasses webpack - it builds into static json and scss vars*

#### Publish/versioning

Install [np](https://github.com/sindresorhus/np) globally and run `PACKAGE='component-name' npm run publish` from root

### To do

- Linting strategies
- Describe testing strategies
