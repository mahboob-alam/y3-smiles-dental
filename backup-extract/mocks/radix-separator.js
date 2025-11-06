const React = require('react');

module.exports = {
  Root: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
};