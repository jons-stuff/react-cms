import { combineReducers } from 'redux';

import contextMenu from 'Components/ContextMenu/reducer';
import { logList } from './Log/LogListPage';
import { newsList } from './News/NewsListPage';
import { orderList } from './Orders/OrderListPage';
import { vacancyList } from './Vacancies/VacancyListPage';

const reducer = combineReducers({
  contextMenu,
  logList,
  newsList,
  orderList,
  vacancyList,
});

export default reducer;
