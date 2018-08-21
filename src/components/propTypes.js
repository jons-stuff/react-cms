import PropTypes from 'prop-types';

export const routerMatchPropType = PropTypes.shape({
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
});

export const routerHistoryPropType = PropTypes.shape({
  push: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
});
