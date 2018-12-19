# Component Template

1. Copy this folder and rename with capitalized component name
2. (optional) Add render target to dom with class `react-component-name`, eg.: `<div class="react-component-name"></div>`
3. (optional) Import container to `bundleScripts.js` and match it up with dom target in the `targets` array
4. Done

*`loopRender` method in `bundleScripts.js` will automatically load data-attributes on the div-element into the components' `ownProps`, wrap it with Redux store and inject it to the dom.*