import { configure } from '@storybook/react';
import { componentPaths } from '../entryPaths'
import './styles.scss';

function loadStories() {
  componentPaths.forEach( c => {
    require('../packages/' + c + '/stories.js');
  })
}

configure(loadStories, module);