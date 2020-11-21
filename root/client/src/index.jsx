import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import ProjectListComponent from './components/projectsList/ProjectListComponent';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ProjectListComponent />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
