import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';
import Template from './Template'

it('Template renders correctly', () => {
  const tree = shallow( <Template />)

  expect(toJSON(tree)).toMatchSnapshot()
})
