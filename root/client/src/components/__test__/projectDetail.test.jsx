import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ProjectDetailComponent from '../projectDetail/ProjectDetail';

jest.mock('../../redux/actions/projectsActions');

const initialState = {
  login: [],
  projectList: [],
  createdProject: {},
  updatedProject: [],
  deletedProject: '',
  projectDetail: {},
  error: [],
};
const testStore = configureStore([thunk]);

xdescribe('UserList', () => {
  let Wrapper;
  beforeEach(() => {
    const store = testStore(initialState);
    store.dispatch = jest.fn();

    Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    render(<ProjectDetailComponent />, { wrapper: Wrapper });
  });

  test('should render', () => {
    expect(document.querySelector('.detail-container')).toBeInTheDocument();
  });
});