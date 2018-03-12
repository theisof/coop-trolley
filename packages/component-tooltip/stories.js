import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tooltip from './src/index.js';

storiesOf('Tooltip', module)
  .add('with hover effect', () => (
    <div style={{ marginLeft: '50px'}}>
      <Tooltip width={60} text='Tooltip'>
        <div style={{ fontSize: '20px' }}>Hover me!</div>
      </Tooltip>

      <em style={{ fontSize: '12px', marginLeft: '10px' }}>...on a large display</em>
    </div>
  ))
