import 'babel/polyfill'
import alphanumeric from '../src/index'
import {expect} from 'chai'

describe('alphanumeric basics', function () {
  it('should exist', function () {
    expect(typeof alphanumeric).to.equal('function')
  })

  it('should return expected length', function () {
    let rand = alphanumeric(5)
    expect(rand.length).to.equal(5)
  })
})
