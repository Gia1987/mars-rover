'use strict'

const chai = require('chai')
const expect = chai.expect

const Plateau = require('../plateau.js').Plateau

describe('Plateau', () => {
  it('should create a grid 1 x 1',() => {
    var plateau = new Plateau('1 1')
    expect(plateau.createGrid(1,1)).to.deep.equal([ [ '', ''], [ '', '' ] ])
  })
})
