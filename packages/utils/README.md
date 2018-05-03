# Coop Utils

Misc utility functions to use in Coop projects

Part of [Coop Trolley](https://github.com/theisof/coop-trolley)

## Installation

```sh
npm install @coop/utils --save
```

```javascript
import utils from '@coop/utils'
```

## Sort Alphabetically

Sort arrays alphabetically.

### Usage

```javascript
utils.sortAlphabetically(array, key, asc = true)
```

### Example
```javascript
const arr = [ { name: 'foo' }, { name: 'bar' }  ]

const result = utils.sortAlphabetically(arr, 'name')

console.log(result)

// [ { name: 'bar' }, { name: 'foo' }  ]

```

## Emit Event

Cross browser compliant eventEmitter.

### Usage
```javascript
utils.emitEvent(eventName, value = null)
```

### Example
```javascript
utils.emitEvent('trigger-something')
```

## Debounce

Debounce script to avoid firing tasks to often

### Example
```javascript

const fn = utils.debounce(() => {
	// Do stuff
}, 200);

window.addEventListener('resize', fn);
```

*[Source](https://davidwalsh.name/javascript-debounce-function)*


## Dom Helpers

Misc dom helpers to use instead of jQuery

### Usage

```javascript
// Get parsed JSON data stored as data attribute on element
getParsedDomDataFromId(id, dataAttribute)

// Get unparsed data from attribute on element
getDomDataFromId(id, dataAttribute)

// Get each of element
forEachSelector('.class-name', element => {
	// Do stuff with element
})

// Fires when dom is ready
domReady(myFunc)

// Remove class from element
removeClass(targetElement, classToRemove, optionalIndex)
```
