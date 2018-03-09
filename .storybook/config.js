import { configure } from '@storybook/react';
import './styles.scss';

function loadStories() {
  require('../packages/coop-component-pricetag/stories.js');
  require('../packages/coop-component-tooltip/stories.js');
}

configure(loadStories, module);