/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Navbar} from './Navbar'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Navbar', () => {
  let nav

  beforeEach(() => {
    nav = shallow(<Navbar />)
  })

  it('renders the name of the program', () => {
    expect(nav.find('h1').text()).to.be.equal('GitDash')
  })
})
