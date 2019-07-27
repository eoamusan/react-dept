import React from 'react';
import logo from './logo.svg';
import './styles/styles.css';
import './styles/header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </div>
    </Router>
  );
}

export default App;
