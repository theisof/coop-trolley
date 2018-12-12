import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';
import StandardButton from './StandardButton'

it('StandardButton renders correctly', () => {
  const tree = shallow( <StandardButton />)

  expect(toJSON(tree)).toMatchSnapshot()
})
