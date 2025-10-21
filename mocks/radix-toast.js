const React = require('react');

module.exports = {
  Provider: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Root: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Title: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Description: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Action: React.forwardRef((props, ref) => <button ref={ref} type="button" {...props} />),
  Close: React.forwardRef((props, ref) => <button ref={ref} type="button" {...props} />),
  Viewport: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
};