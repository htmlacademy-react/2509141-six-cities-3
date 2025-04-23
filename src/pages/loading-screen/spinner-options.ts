const SpinnerOptions = {
  lines: 5, // The number of lines to draw
  length: 80, // The length of each line
  width: 6, // The line thickness
  radius: 40, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 0, // Corner roundness (0..1)
  speed: 0.7, // Rounds per second
  rotate: 18, // The rotation offset
  animation: 'spinner-line-shrink', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#161cc0', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};


export default SpinnerOptions;
