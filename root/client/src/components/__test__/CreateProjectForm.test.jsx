import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider as ReduxProvider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import CreateProjectForm from '../projectForm/CreateProjectForm';

describe('CreateProjectForm', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should be defined - projectDetail === null ', () => {
    const projectDetail = {
      _id: 'Skylab', owner: 'Skylab', name: 'Skylab', description: 'Mola molt!', created_at: 'Skylab', language: 'Javascript',
    };
    const store = configureStore({
      projectsReducer: { projectDetail },
    });
    store.dispatch = jest.fn();

    act(() => {
      render(
        <ReduxProvider store={store}>
          <BrowserRouter>
            <CreateProjectForm />
          </BrowserRouter>
        </ReduxProvider>,
        container,
      );
    });

    expect(document.getElementsByClassName('form-container')[0]).toBeDefined();
  });
});
