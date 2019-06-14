import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Users from './Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is a simple website to help me learn react routing and as well as some JSON API using the <code>fetch()</code> method.</p>
    </>
  );
}

export default App;
