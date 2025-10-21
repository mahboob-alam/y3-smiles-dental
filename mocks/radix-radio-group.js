const React = require('react');

module.exports = {
  Root: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Item: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Indicator: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
};