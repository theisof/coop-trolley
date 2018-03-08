import { configure } from '@storybook/react';
import './styles.css';

function loadStories() {
  require('../packages/coop-component-pricetag/stories.js');
  require('../packages/coop-component-tooltip/stories.js');
}

configure(loadStories, module);