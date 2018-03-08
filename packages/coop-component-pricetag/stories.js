import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pricetag from './src/Pricetag';

storiesOf('PriceTag', module)
  .add('with whole number', () => (
    <Pricetag price={10} />
  ))
  .add('with comma number', () => (
    <Pricetag price={10.25} />
  ));