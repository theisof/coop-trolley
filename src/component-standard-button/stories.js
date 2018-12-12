import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StandardButton from './src/index.js';

const Wrap = ({ children }) => (
  <div style={{
      width: '400px',
      margin: '25px'
    }}
  >
    {children}
  </div>
)

storiesOf('Standard Button', module)
  .add('primary', () => (
    <Wrap>
      <StandardButton>My primary button</StandardButton>
    </Wrap>
  ))
  .add('secondary', () => (
    <Wrap>
      <StandardButton type="secondary">My secondary button</StandardButton>
    </Wrap>
  ));