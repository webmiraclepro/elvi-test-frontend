import * as React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { INIT_MAIN_STATE } from 'redux/reducers/mainStateUpdaters';
import { INIT_AUX_STATE } from 'redux/reducers/auxStateUpdaters';

const render = (
  component,
  {
    initialState,
    store = configureStore([thunk])(initialState),
    ...renderOptions
  } = {
    initialState: {
      main: INIT_MAIN_STATE,
      aux: INIT_AUX_STATE,
    }
  },
) => {
  return rtlRender(component, {
    wrapper: TestWrapper(store),
    ...renderOptions,
  })
}

const TestWrapper = (store) => ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export * from '@testing-library/react'
// override the built-in render with our own
export { render }