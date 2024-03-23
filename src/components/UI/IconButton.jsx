import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {log} from '../../log.js';

/**
 * Component to show the icon buttons
 *
 * @param {string} children
 * @param {JSX.Element} icon
 * @param {any} props
 * @return {JSX.Element}
 */
const IconButton = memo(function IconButton({children, icon, ...props}) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

IconButton.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export default IconButton;
