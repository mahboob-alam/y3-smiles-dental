const React = require('react');

module.exports = {
  Root: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Trigger: React.forwardRef((props, ref) => <button ref={ref} type="button" {...props} />),
  Portal: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Overlay: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Content: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Title: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Description: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Close: React.forwardRef((props, ref) => <button ref={ref} type="button" {...props} />),
};