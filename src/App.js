import React from 'react';
import './styles/styles.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/teko.css'
import './styles/MaisonNeue.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={Home} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
