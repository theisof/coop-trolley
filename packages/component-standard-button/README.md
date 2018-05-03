# Coop Standard Button

## React component

Standard button component with Coop styling.

```
  <StandardButton type="secondary" onClick={() => {}}>
    My button
  </StandardButton>
```

### Props

| Property            | PropType         | Required | Default Value |
| ------------------- | ---------------- | -------- | ------------- |
| children            | node             | true     | -             |
| type                | string           | false    | primary       |
| onClick             | function         | false    | -             |

## CSS

Use outside React with the following classes:

```
  <div class='coop-standard-button coop-standard-button--secondary'>
    My button
  </div>
```

Part of [Coop Trolley](https://github.com/theisof/coop-trolley)