import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider as ReduxProvider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../redux/configureStore';
import ProjectListComponent from '../projectsList/ProjectListComponent';

jest.mock('../../redux/actions/projectsActions');

describe('ProjectListComponent', () => {
  let container;

  const wrapperFactory = (projectList) => {
    const store = configureStore({ projectsReducer: { projectList } });
    store.dispatch = jest.fn();

    return act(() => {
      render(
        <ReduxProvider store={store}>
          <BrowserRouter>
            <ProjectListComponent />
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

  test('should be defined - ProjectList.length === 0', () => {
    const projectList = [];

    wrapperFactory(projectList);

    expect(document.getElementsByClassName('projects-wrapper')[0]).toBeDefined();
  });

  test('should be defined - ProjectList.length>0', () => {
    const projectList = [{
      _id: 'Skylab', owner: 'Skylab', name: 'Skylab', description: 'Mola molt!', created_at: 'Skylab', language: 'Javascript',
    }];

    wrapperFactory(projectList);

    expect(document.getElementsByClassName('projects-wrapper')[0]).toBeDefined();
  });
});
