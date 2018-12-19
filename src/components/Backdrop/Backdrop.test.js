import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';
import Backdrop from './Backdrop'

it('Backdrop renders correctly', () => {
  const tree = shallow( <Backdrop />)

  expect(toJSON(tree)).toMatchSnapshot()
})
