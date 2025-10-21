const React = require('react');

module.exports = {
  Root: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Image: React.forwardRef((props, ref) => <img ref={ref} {...props} />),
  Fallback: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
};