import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};
export default Notification;

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
