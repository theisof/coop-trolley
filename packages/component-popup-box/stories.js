import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import popupBox from './src/index.js';

const onClick = () => {
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
      },
    ]
  })
}

storiesOf('Popup Box', module)
  .add('dialogue', () => (
    <div onClick={onClick} style={{
      backgroundColor: '#555',
      color: '#fff',
      padding: '10px 50px',
      display: 'block',
      margin: '25px',
      width: '100px',
      textAlign: 'center'
    }}>
      Click me
    </div>
  ))