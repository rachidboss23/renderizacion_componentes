import React from 'react';

const Alert = ({ tipo, mensaje }) => {
  return (
    <div className={`alert alert-${tipo} alert`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;

