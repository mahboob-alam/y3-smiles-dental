const React = require('react');

module.exports = {
  Root: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Trigger: React.forwardRef((props, ref) => <button ref={ref} type="button" {...props} />),
  Portal: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Content: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Item: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Group: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  Label: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  CheckboxItem: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  RadioItem: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  SubContent: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
  SubTrigger: React.forwardRef((props, ref) => <button ref={ref} type="button" {...props} />),
  Separator: React.forwardRef((props, ref) => <div ref={ref} {...props} />),
};