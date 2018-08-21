import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import ContextMenu from 'Components/ContextMenu';
import reducer from './reducer';
import createStore from './store';
import { Routes, navItems } from './routes';
import Frame from './Frame';

const store = createStore(reducer);

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <Frame navItems={navItems}>
          <Routes />
          <ContextMenu />
        </Frame>
      </Provider>
    </Router>
  );
}
