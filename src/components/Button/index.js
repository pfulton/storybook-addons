import React from 'react';
import buttonClasses from './classes';

function Button(props) {
  const { to, rel, target, onClick, type, buttonIcon, dataID, children } = props;

  const renderButton = () => (
    <button
      className={buttonClasses(props)}
      type={type}
      onClick={onClick}
      data-id={dataID}
    >
      {children}
    </button>
  );

  return renderButton();
}

export default Button;

