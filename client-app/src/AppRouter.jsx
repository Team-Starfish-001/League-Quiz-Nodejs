import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import StudentQuizView from './components/StudentTakeAQuizView/StudentQuizView';
import TeacherCreateQuizView from './components/TeacherCreateQuizView/TeacherCreateQuizView'

function AppRouter() {
  return (
    <div>
      <Router history={createHistory()}>
        <Switch>
	  <Route path="/" exact component={App} />
          <Route path="/takeQuiz" exact component={StudentQuizView} />
	  <Route path="/makeQuiz" exact component={TeacherCreateQuizView} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;