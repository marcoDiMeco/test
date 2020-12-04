
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyles from './global-styles';
import { AppContainer } from './containers';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;