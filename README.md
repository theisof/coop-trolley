# Coop Trolley

*This document is a work in progress.*

### Running Storybook

Run `npm run storybook`

#### Prereqs

Include fonts.

Standard: 'MarkOT', 'Open Sans', sans-serif
Display: 'Soho Std', 'Roboto Slab', sans-serif

## About

Coop has two primary web application types - SPA and CMS solutions - wich need two separate strategies.

### Strategy
- Follow standards
- Use broadly recognized patterns, frameworks and libraries
- Keep bundle sizes small
- Clean up redundant code - especially deprecated CSS
- Continuous refactoring
- Automatize repeating tasks
- Seperate frontend from backend when possible

### General notes
- Use React for advanced JavaScript views
- No jQuery *(Todo: remove jQuery)*
- Use ES6/7 when writing JavaScript (Babel)
- Use BEM syntax for CSS class names
- Use SCSS for compiling CSS

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

Use gulp to compile assets. See the asset setup in [Coop Opskrifter repo](https://coopitdevelopment.visualstudio.com/Coop%20Recipes/Coop%20Recipes%20Team/_git/recipes-src?path=%2Fsrc%2FCoopRecipes.Consumer.Website%2Fassets&version=GBmaster&_a=contents)

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


### To do

- Linting strategies
- Testing strategies
- Refactor code according to styleguide - especially external deliveries
