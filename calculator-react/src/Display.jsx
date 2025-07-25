import React from 'react';

const Display = ({ value }) => {
  return <input type="text" className="display" value={value} readOnly />;
};

export default Display;