export default function createLoadStatusSelectors(getLoadStatusState) {
  const getLoadedStatus = state => getLoadStatusState(state);

  const isLoaded = state => getLoadedStatus(state) === 'loaded';

  return {
    isLoaded,
  };
}
