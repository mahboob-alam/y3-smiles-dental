const React = require('react');

const noop = () => null;

module.exports = {
  Root: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Header: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Item: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Trigger: React.forwardRef((props, ref) => <button ref={ref} type="button" {...props} />),
  Content: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
};