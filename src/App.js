import React from 'react'
import './styles/styles.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/teko.css'
import './styles/MaisonNeue.css'
import './styles/material-icons.css'

import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/store-index'
import { BrowserRouter, Route } from 'react-router-dom'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './components/Home/Home'

import { homeActions } from './actions'


class App extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  handleScroll = () => {
    let top = window.scrollY;

    if (top >= 100) {
      this.props.fixHeader(true);
    } else if (top < 100) {
      this.props.fixHeader(false);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <div className="App">
            <Header fixed={this.props.home.headerFixed} />
            <div>
              <Route exact path="/" component={Home} />
            </div>
            <Footer scrollTop={this.scrollTop} />
          </div>
        </ConnectedRouter>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    home: state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fixHeader: bindActionCreators(homeActions.fixHeader, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);