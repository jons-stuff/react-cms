import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import { partial } from 'ramda';

import ItemLoader from 'Components/ItemLoader';
import { routerMatchPropType, routerHistoryPropType } from 'Components/propTypes';
import VacancyEditForm from './VacancyEditForm';

import { vacancyApiConnector, newVacancy } from '../vacancies';
import { routePaths } from '../../routes';

function VacancyEditPage({ match, history }) {
  const vacancyID = match.params.id;

  const navigateBack = () => { history.push(routePaths.vacancyList); };

  const loadVacancy = vacancyID === 'new'
    ? async () => newVacancy()
    : partial(vacancyApiConnector.getItem, [vacancyID]);

  const saveVacancy = vacancyID === 'new'
    ? vacancyApiConnector.postItem
    : partial(vacancyApiConnector.patchItem, [vacancyID]);

  const handleSave = editedVacancy => saveVacancy(editedVacancy).then(navigateBack);

  return (
    <ItemLoader loader={loadVacancy} returnActionForFailedLoad={navigateBack}>
      {vacancy => <VacancyEditForm vacancy={vacancy} save={handleSave} cancel={navigateBack} />}
    </ItemLoader>
  );
}

VacancyEditPage.propTypes = {
  match: routerMatchPropType.isRequired,
  history: routerHistoryPropType.isRequired,
};

export default withRouter(VacancyEditPage);
