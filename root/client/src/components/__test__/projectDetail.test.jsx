import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import projectList from '../projectsList/ProjectListComponent';

jest.mock('../../redux/actions/projectsActions');

const initialState = {
  projectList: [{}],
  createdProject: [],
  updatedProject: [],
  deletedProject: [],
  projectDetail: {},
  error: [],
};
const buildStore = configureStore([thunk]);

xdescribe('UserList', () => {
  let Wrapper;
  beforeEach(() => {
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    // eslint-disable-next-line react/prop-types
    Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    render(<projectList />, { wrapper: Wrapper });
  });

  test('should render', () => {
    expect(true).toBe(true);
  });
});
