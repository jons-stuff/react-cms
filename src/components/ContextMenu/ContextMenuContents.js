import React from 'react';
import PropTypes from 'prop-types';
import { clampDocumentCoordsToViewPort, documentCoordsToOffsetParent } from 'Utilities/dom';

export default class ContextMenuContents extends React.Component {
  constructor(props) {
    super(props);
    this.rootEl = null;
    this.state = {
      top: 0,
      left: 0,
    };
  }

  componentDidMount() {
    this.reposition();
  }

  componentDidUpdate(prevProps) {
    if (this.props.coords !== prevProps.coords) {
      this.reposition();
    }
  }

  reposition() {
    const menuDocumentCoords = clampDocumentCoordsToViewPort(
      this.props.coords,
      this.rootEl,
      3,
    );
    const menuOffsetParentCoords = documentCoordsToOffsetParent(
      menuDocumentCoords,
      this.rootEl,
    );
    this.setState(menuOffsetParentCoords);
  }

  render() {
    const { hide, children } = this.props;

    const onDismiss = (e) => {
      if (!this.rootEl.contains(e.relatedTarget)) {
        hide();
      }
    };

    const onClick = onAction => (e) => {
      e.preventDefault();
      hide();
      onAction();
    };

    const { top, left } = this.state;

    return (
      <div
        ref={(el) => { this.rootEl = el; }}
        className="contextMenu"
        style={{ position: 'absolute', top, left }}
        onMouseOut={onDismiss}
        onBlur={onDismiss}
      >
        {children.map(item => (
          <div key={item.label}>
            <a href="#" onClick={onClick(item.onAction)}>{item.label}</a>
          </div>
        ))}
      </div>
    );
  }
}

export const childrenPropType = PropTypes.arrayOf(PropTypes.shape({
  onAction: PropTypes.func,
  label: PropTypes.string,
}));

export const coordsPropType = PropTypes.shape({
  x: PropTypes.number,
  y: PropTypes.number,
});

ContextMenuContents.propTypes = {
  children: childrenPropType.isRequired,
  hide: PropTypes.func.isRequired,
  coords: coordsPropType.isRequired,
};
