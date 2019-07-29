import React from 'react'
import './styles/styles.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/teko.css'
import './styles/MaisonNeue.css'
import './styles/material-icons.css'
import './styles/navicon.css'
import './styles/menu.css'
import './styles/animate.css'

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

  showMenu = () => {
    this.props.showMenu(!this.props.home.showMenu);
  }

  focusLink = (type, link) => {
    this.props.focusLink(type, link);
  }

  render() {
    return (
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <div className="App">
            <Header
              fixed={this.props.home.headerFixed}
              showMenu={this.showMenu}
              home={this.props.home}
              focusLink={this.focusLink} />
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
    fixHeader: bindActionCreators(homeActions.fixHeader, dispatch),
    showMenu: bindActionCreators(homeActions.showMenu, dispatch),
    focusLink: bindActionCreators(homeActions.focusLink, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);