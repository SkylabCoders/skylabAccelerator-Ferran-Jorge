import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider as ReduxProvider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import ProjectHeader from '../projectHeader/ProjectHeader';

jest.mock('../../redux/actions/projectsActions');

describe('ProjectHeader', () => {
  let container;

  const wrapperFactory = (login) => {
    const store = configureStore({ projectsReducer: { login } });
    store.dispatch = jest.fn();

    return act(() => {
      render(
        <ReduxProvider store={store}>
          <BrowserRouter>
            <ProjectHeader />
          </BrowserRouter>
        </ReduxProvider>,
        container,
      );
    });
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should be defined - login length ', () => {
    const login = [{ name: 'skylab' }, { login: 'coders' }];
    wrapperFactory(login);

    expect(document.getElementsByClassName('header-container')[0]).toBeDefined();
  });

  test('should be defined - login length = 0', () => {
    const searchUrl = '?code=1234';
    Object.defineProperty(window, 'location', {
      value: {
        search: searchUrl,
      },
    });
    const login = [];
    wrapperFactory(login);

    expect(document.getElementsByClassName('header-container')[0]).toBeDefined();
  });
});
