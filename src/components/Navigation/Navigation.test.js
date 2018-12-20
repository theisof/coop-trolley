import React from 'react'
import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json';
import Navigation from './Navigation'

it('Navigation renders correctly', () => {
  const tree = mount( <Navigation />)

  expect(toJSON(tree)).toMatchSnapshot()
})
