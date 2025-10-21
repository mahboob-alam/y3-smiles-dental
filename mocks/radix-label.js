const React = require('react');

module.exports = {
  Root: React.forwardRef((props, ref) => <label ref={ref} {...props} />),
};