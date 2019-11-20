import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import Home from './components/Home'
import QuestionForm from './components/QuestionForm'
import QuestionList from './components/QuestionList'
import CommentForm from './components/CommentForm'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="MainContent">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/questionlist' component={QuestionList} />
            <Route path='/questionform' component={QuestionForm} />
            <Route path='/commentform' component={CommentForm} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
