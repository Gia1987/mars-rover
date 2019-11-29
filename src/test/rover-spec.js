'use strict'

const chai = require('chai')
const expect = chai.expect

const Rover = require('../rover.js').Rover

let rover

describe('Rover', () => {
  beforeEach(() => {
   rover = new Rover('1 2 N')
  })
  it('should start at given position',() => {
    expect(rover.location).to.deep.equal([1,2 ,'N']);
  })
  describe('processData', ()=>{
    it('should parse string in number and return an array',()=>{
      expect(rover.processData('1 2 N')).to.deep.equal([1,2,'N']);
    })
  })

})
