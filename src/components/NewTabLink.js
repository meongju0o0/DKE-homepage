import React from 'react';

export const NewTabLink = ({ to, children }) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
