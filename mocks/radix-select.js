const React = require('react');

module.exports = {
  Root: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Trigger: React.forwardRef((props, ref) => <button ref={ref} type="button" {...props} />),
  Value: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Portal: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Content: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Viewport: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Item: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  ItemText: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  ItemIndicator: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Group: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Label: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Separator: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Arrow: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
};