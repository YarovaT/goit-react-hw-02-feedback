import React from 'react';
import PropTypes from 'prop-types';

const StatisticsItem = ({ label, value }) => {
  return (
    <>
      {label}: {value}
    </>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatisticsItem;
