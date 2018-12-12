# Coop Standard Button

## React component

Standard button component with Coop styling.

Install:
```
  npm i @coop/component-standard-button --save
```

Use with React:
```
  import StandardButton from '@coop/component-standard-button'
  import '@coop/component-standard-button/styles.css'

  <StandardButton type="secondary" onClick={() => {}}>
    My button
  </StandardButton>
```

### Props

| Property            | PropType         | Required | Default Value | Options
| ------------------- | ---------------- | -------- | ------------- | -------------
| children            | node             | true     | -             | -
| type                | string           | false    | primary       | primary, secondary, white-transparent
| onClick             | function         | false    | -             |

## CSS

Use outside React with the following classes:

```scss
  @import '~@coop/component-standard-button/styles.css';
```

```html
  <div class='coop-standard-button coop-standard-button--secondary'>
    My button
  </div>
```

Part of [Coop Trolley](https://github.com/theisof/coop-trolley)