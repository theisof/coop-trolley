import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json';
import Search from './Search'

it('Search renders correctly', () => {
  const tree = shallow( <Search />)

  expect(toJSON(tree)).toMatchSnapshot()
})
