# Coop Popup Box

## React component

The popup box is an alternative to sytem dialogues like `alert()` and `confirm()` and can be used anywhere in the application layers.

The component renders outside the main React app, and is destroyed entirely on close. Hence, use like a function call - not jsx.

Pass an object with title, text and an actions array like below.

```
  import '@coop/component-popup-box/styles.css' // import once somewhere
  import popupBox from '@coop/component-popup-box'

  popupBox({
    title: 'Test',
    text: 'Testing the popup box with a range of random options',
    actions: [
      {
        text: 'Yes',
        secondary: true,
        callback: () => { alert('Clicked yes') }
      },
      {
        text: 'No',
        secondary: true,
        callback: () => { alert('Clicked no') }
      },
      {
        text: 'Cancel'
      }
    ]
  })
```

Optionally omit `callback` if the action should do nothing (like cancel).

The `secodary` prop will apply the alternative button styling to the component.

### Props

| Property            | PropType         | Required | Default Value |
| ------------------- | ---------------- | -------- | ------------- |
| title               | string           | true     | -             |
| text                | string           | false    | null          |
| actions             | array            | true     | -             |
| - text              | string           | true     | -             |
| - callback          | function         | false    | null          |
| - secondary         | bool             | false    | false         |


Part of [Coop Trolley](https://github.com/theisof/coop-trolley)