import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';
import Button from './Button'

it('Button renders correctly', () => {
  const tree = shallow( <Button />)

  expect(toJSON(tree)).toMatchSnapshot()
})
