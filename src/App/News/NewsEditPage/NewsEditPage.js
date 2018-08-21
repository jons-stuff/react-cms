import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import { partial } from 'ramda';

import ItemLoader from 'Components/ItemLoader';
import { routerMatchPropType, routerHistoryPropType } from 'Components/propTypes';
import NewsEditForm from './NewsEditForm';

import { newsApiConnector, newNewsItem } from '../news';
import { routePaths } from '../../routes';

function NewsEditPage({ match, history }) {
  const newsID = match.params.id;

  const navigateBack = () => { history.push(routePaths.newsList); };

  const loadNewsItem = newsID === 'new'
    ? async () => newNewsItem()
    : partial(newsApiConnector.getItem, [newsID]);

  const saveNewsItem = newsID === 'new'
    ? newsApiConnector.postItem
    : partial(newsApiConnector.patchItem, [newsID]);

  const handleSave = editedNews => saveNewsItem(editedNews).then(navigateBack);

  return (
    <ItemLoader loader={loadNewsItem} returnActionForFailedLoad={navigateBack}>
      {news => <NewsEditForm news={news} save={handleSave} cancel={navigateBack} />}
    </ItemLoader>
  );
}

NewsEditPage.propTypes = {
  match: routerMatchPropType.isRequired,
  history: routerHistoryPropType.isRequired,
};

export default withRouter(NewsEditPage);
