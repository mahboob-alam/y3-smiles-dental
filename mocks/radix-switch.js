const React = require('react');

module.exports = {
  Root: React.forwardRef((props, ref) => <button ref={ref} type="button" {...props} />),
  Thumb: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
};