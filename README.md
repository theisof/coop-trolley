# Coop Trolley

## Intro

The Coop Trolley supply internal and external partners with Coop agnostic frontend tools to speed up development and improve reusability.

The packages of this repo are available as npm modules and should be installed from there. See [Coop's npm profile](https://www.npmjs.com/org/coop) for full list of components.

Packages can be included as React components or stylesheets only. More info on this to come...

## Running locally with Storybook

See components examples with Storybook and develop locally. Download this repo and install [Storybook cli tools](https://github.com/storybooks/storybook)

Then run
```
npm i
npm run start
```

## Prerequisite

Load fonts manually. Opens Sans and Roboto Slab can be loaded from Google Fonts.

Standard: 'MarkOT' or 'Open Sans'  \
Display: 'Soho Std' or 'Roboto Slab'

Assumes use with Webpack on the receiving end that minifys etc. for production.

### Npm modules

Module paths are saved in `entryPaths.js` for webpack to pick up when building. Storybook compliant React components go into the `componentPaths` array.

*Note that `@coop/config` module bypasses webpack - it builds into static json and scss vars*

#### Publish/versioning

To update a package, run the following command with the package name and the updated version number:

`PACKAGE='component-name' VERSION=1.0.5 npm run publish`

*Requires you to be part of the @coop team on npm registry. Get invite from [Theis](mailto:theis.othmar.froehlich@coop.dk@coop).*

### To do

- Linting strategies
- Describe testing strategies

---

# Styleguide

### General notes
- React for advanced JavaScript views
- No jQuery
- ES6/7 when writing JavaScript (Babel)
- BEM syntax for CSS class names
- SCSS for compiling CSS
- Graceful degradation with acceptable support for IE10+
- Avoid CSS-frameworks, use flex-box for grids

## Single Page App (SPA)

- Build SPA's with React.
- Base projects on Create React App and avoid ejecting.
- Styling through JavaScript
- Use the "container with dump components" pattern
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

```jsx
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

## CMS solutions

Frontend implementation in backend rendered applications is CMS agnostic though most Coop solution run on Umbraco.

Write CSS in SASS and follow the [BEM](http://getbem.com/) naming convention.

Use Webpack to compile assets (Configs will come later).

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

**Exceptions**: pseudo classes and context versions should be nested:

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