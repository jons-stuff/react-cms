import React from 'react';

function joinWithElement(items, joinElement) {
  const addNextItem = (resultSoFar, nextItem, index) => (
    resultSoFar
      ? [...resultSoFar, React.cloneElement(joinElement, { key: index }), nextItem]
      : [nextItem]
  );

  return items.reduce(addNextItem, null);
}

export function nl2br(str) {
  const lines = str.split('\n');
  return joinWithElement(lines, <br />);
}

