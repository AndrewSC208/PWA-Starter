import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { initStore, history } from '../../store/store'
import ViewportView from '../viewport/Viewport.container';

const store = initStore({});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ViewportView />
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
