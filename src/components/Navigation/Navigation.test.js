import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';
import Navigation from './Navigation'

it('Navigation renders correctly', () => {
  const tree = shallow( <Navigation />)

  expect(toJSON(tree)).toMatchSnapshot()
})
