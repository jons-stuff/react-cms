import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import LogListPage from './Log/LogListPage';
import NewsListPage from './News/NewsListPage';
import NewsEditPage from './News/NewsEditPage';
import OrderListPage from './Orders/OrderListPage';
import OrderEditPage from './Orders/OrderEditPage';
import VacancyListPage from './Vacancies/VacancyListPage';
import VacancyEditPage from './Vacancies/VacancyEditPage';

export const routePaths = {
  home: '/',
  logList: '/log',
  newsList: '/news',
  newsEdit: { path: id => `/news/${id}`, pattern: '/news/:id' },
  orderList: '/orders',
  orderEdit: { path: id => `/orders/${id}`, pattern: '/orders/:id' },
  vacancyList: '/vacancies',
  vacancyEdit: { path: id => `/vacancies/${id}`, pattern: '/vacancies/:id' },
};

export function Routes() {
  return (
    <Fragment>
      <Route exact path={routePaths.home} component={Home} />
      <Route exact path={routePaths.logList} component={LogListPage} />
      <Route exact path={routePaths.newsList} component={NewsListPage} />
      <Route path={routePaths.newsEdit.pattern} component={NewsEditPage} />
      <Route exact path={routePaths.orderList} component={OrderListPage} />
      <Route path={routePaths.orderEdit.pattern} component={OrderEditPage} />
      <Route exact path={routePaths.vacancyList} component={VacancyListPage} />
      <Route path={routePaths.vacancyEdit.pattern} component={VacancyEditPage} />
    </Fragment>
  );
}

export const navItems = [
  { label: 'Home', route: routePaths.home, exact: true },
  { label: 'Order Management', route: routePaths.orderList },
  { label: 'Company News', route: routePaths.newsList },
  { label: 'Company Vacancies', route: routePaths.vacancyList },
  { label: 'System Log', route: routePaths.logList },
];
