# Coop Backdrop

## React component

Backdrop component to use behind modals, overlays and widgets etc. Control the visibility state with prop `visible`.

```
  import Backdrop from '@coop/component-backdrop'
  import '@coop/component-backdrop/styles.css'

  <Backdrop visible={true} onClose={() => {}} zIndex={1000} />
```

### Props

| Property            | PropType         | Required | Default Value |
| ------------------- | ---------------- | -------- | ------------- |
| visible             | boolean          | true     | false         |
| onClose             | function         | false    | -             |
| zIndex              | number           | true     | 100000        |

Part of [Coop Trolley](https://github.com/theisof/coop-trolley)