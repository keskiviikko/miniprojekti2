import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import Home from './components/Home'
import QuestionForm from './components/QuestionForm'
import QuestionList from './components/QuestionList'
import CommentForm from './components/CommentForm'

function App() {
  return (
    <Router>
      <div className="App">
        <h2 className='header'>JUUSTO VAI KINKKU?</h2>
        <Nav className="justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" href="/questionlist">Question List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" href="/questionform">Question Form</Nav.Link>
          </Nav.Item>

        </Nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/questionlist' component={QuestionList} />
          <Route path='/questionform' component={QuestionForm} />
          <Route path='/commentform' component={CommentForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
