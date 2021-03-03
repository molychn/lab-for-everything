import assert from 'power-assert'
import chalk from 'chalk'
import add from '../../src/lodash/add'
describe('add', () => {
  it('should add two numbers', () => {
    assert.strictEqual(add(1, 19), 20);
    assert.strictEqual(add(-6, -4), -10)
  })
  it('one of the items is string', () => {
    assert.strictEqual(add('4', 4), '44')
  })
  it('both of all are string', () => {
    assert.strictEqual(add('1', '2'), '12')
    assert.strictEqual(add('x', 'y'), 'xy')
  })
  it('one of items is undefined', () => {
    assert.strictEqual(add(undefined, 2), 2)
    assert.strictEqual(add(undefined, 'hello world'), 'hello world')
  })
  it('both of all are undefined', () => {
    assert.strictEqual(add(undefined, undefined), 0)
  })
  it('0.1 + 0.2 !== 0.3 ?', () => {
    assert.notStrictEqual(add(0.1, 0.2), 0.3)
  })
})