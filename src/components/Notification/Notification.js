import React from 'react';
import Proptypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;

Notification.prototype = {
  message: Proptypes.string.isRequired,
};

export default Notification;
