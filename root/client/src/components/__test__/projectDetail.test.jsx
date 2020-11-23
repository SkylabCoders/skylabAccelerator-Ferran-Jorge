/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import { getProjectDetail, deleteProject } from '../../redux/actions/projectsActions';
import ProjectDetail from '../projectDetail/ProjectDetail';
import ProjectList from '../projectsList/ProjectListComponent';

jest.mock('../../redux/actions/projectsActions');

const storeMock = configureStore([thunk]);

describe('Detail', () => {
  let wrapper;

  const wrapperFactory = (wrapperInitialState) => {
    const store = storeMock(wrapperInitialState);
    store.dispatch = jest.fn();

    return ({ children }) => {
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>;
    };
  };

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('should render atleast hola', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/loquesea',
      },
    });

    render(<ProjectList />, { wrapper });

    expect(document.querySelector('.pruebas').textContent).toBe('hola');
    // expect(useParams).toHaveBeenCalled();
  });
});
