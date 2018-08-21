import React from 'react';
import PropTypes from 'prop-types';

import { ErrorPage } from 'Components/ErrorPage';

export default class ItemLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadError: null,
      item: null,
    };
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps) {
    if (this.props.loader !== prevProps.loader) {
      this.load();
    }
  }

  load() {
    const { loader: load } = this.props;

    this.setState({ loadError: null, item: null });

    const setItem = (item) => { this.setState({ item }); };
    const handleError = ({ message: loadError }) => { this.setState({ loadError }); };

    load().then(setItem).catch(handleError);
  }

  render() {
    const { loadError, item } = this.state;
    const { children: content, returnActionForFailedLoad } = this.props;

    if (loadError) {
      return <ErrorPage error={loadError} onBack={returnActionForFailedLoad} />;
    }

    if (!item) { return null; }

    return content(item);
  }
}

ItemLoader.propTypes = {
  loader: PropTypes.func.isRequired,
  returnActionForFailedLoad: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
