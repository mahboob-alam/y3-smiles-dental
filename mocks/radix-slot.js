const React = require('react');

function createSlot(node) {
  return node;
}

const noop = () => null;

module.exports = {
  Slot: React.forwardRef((props, ref) => <span ref={ref} {...props} />),
  createSlot,
};