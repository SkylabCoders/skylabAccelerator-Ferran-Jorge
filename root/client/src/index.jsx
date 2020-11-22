import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ProjectHeader from './components/projectHeader/ProjectHeader';
import projectDashboard from './components/projectDashboard/ProjectDashboard';
import ProjectListComponent from './components/projectsList/ProjectListComponent';
import ProjectDetail from './components/projectDetail/ProjectDetail';
import CreateProjectForm from './components/projectForm/CreateProjectForm';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Route path="/" component={ProjectHeader} />
        <Route path="/" exact component={projectDashboard} />
        <Route path="/list" exact component={ProjectListComponent} />
        <Route path="/detail/:id" exact component={ProjectDetail} />
        <Route path="/form" exact component={CreateProjectForm} />
        <Route path="/form/:id" exact component={CreateProjectForm} />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
