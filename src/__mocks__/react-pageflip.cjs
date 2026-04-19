const { forwardRef } = require('react');
const HTMLFlipBook = forwardRef(({ children }, ref) =>
  require('react').createElement('div', { 'data-testid': 'flipbook', ref }, children)
);
module.exports = HTMLFlipBook;
module.exports.default = HTMLFlipBook;
