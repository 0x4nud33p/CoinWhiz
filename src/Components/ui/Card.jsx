import React from 'react';
import classNames from 'classnames';

export const Card = ({ className, children, ...props }) => {
  return (
    <div className={classNames("p-4 rounded-lg shadow-lg bg-white", className)} {...props}>
      {children}
    </div>
  );
};
