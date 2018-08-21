export function getElementDocumentCoords(el) {
  const elementRect = el.getBoundingClientRect();

  return {
    x: elementRect.left + document.body.scrollLeft,
    y: elementRect.top + document.body.scrollTop,
  };
}

export function documentCoordsToOffsetParent(documentCoords, el) {
  const { offsetParent } = el;
  const offsetParentCoords = getElementDocumentCoords(offsetParent);

  return {
    top: documentCoords.y - offsetParentCoords.y,
    left: documentCoords.x - offsetParentCoords.x,
  };
}

export function clampDocumentCoordsToViewPort(documentCoords, el, margin) {
  const viewportBottom = window.innerHeight + window.pageYOffset;
  const yMax = viewportBottom - el.offsetHeight - margin;

  return {
    x: documentCoords.x,
    y: Math.min(documentCoords.y, yMax),
  };
}
