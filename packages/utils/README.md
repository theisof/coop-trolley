# Coop Utils

Misc utility functions to use in Coop projects

Part of [Coop Trolley](https://github.com/theisof/coop-trolley)

## Installation

```sh
npm install @coop/utils --save
```

```javascript
import { moduleName } from '@coop/utils'
```

## Sort Alphabetically

Sort arrays alphabetically.

### Usage

```javascript
sortAlphabetically(array, key, asc = true)
```

### Example
```javascript
const arr = [ { name: 'foo' }, name: 'bar' }  ]

const result = sortAlphabetically(arr, 'name')

console.log(result)

// [ { name: 'bar' }, { name: 'foo' }  ]

```

## Emit Event

Cross browser compliant eventEmitter.

### Usage
```javascript
emitEvent(eventName, value = null)
```

### Example
```javascript
emitEvent('trigger-something')
```

## Debounce

Debounce script to avoid firing tasks to often

### Example
```javascript

const fn = debounce(() => {
	// Do stuff
}, 200);

window.addEventListener('resize', fn);
```

*[Source](https://davidwalsh.name/javascript-debounce-function)*


