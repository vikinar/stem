//Common

import React from 'react'
import { Helmet } from 'react-helmet'
import { Route, Switch, BrowserRouter as Router, HashRouter } from 'react-router-dom'

//Pages

import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Category from './components/category/Category'
import Transfer from './components/pages/Transfer'


//Layout

import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'

//Style

import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dark: false,
      bg: '',
      color: '#023460',
      nav: this.nav,
      toggle: true
    }
  }

  // Detects if device is on iOS 
  isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }
  // Detects if device is in standalone mode
  isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

  componentDidMount() {
    // Checks if should display install popup notification:
    if (this.isIos() && !this.isInStandaloneMode()) {
      this.setState({ showInstallMessage: true });
    }
  }

  switchMode = () => {
    this.setState(prevState => ({
      dark: !prevState.dark
    }));
    this.state.dark ? this.setState({
      navBg: '#1882E1',
      navUserBg: '#023460',
      bg: 'white',
      color: "#023460",
      contentBg: 'white',
      itemBg: 'white',
      itemTitle: '#023460',
      itemColor: '#111'

    }) : this.setState({
      navBg: '#222',
      navUserBg: '#111',
      bg: '#111',
      color: '#ccc',
      contentBg: '#000',
      itemBg: '#222',
      itemTitle: '#1882E1',
      itemColor: '#eee'
    })
  }

  toggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
    this.state.toggle ? this.setState({
      toggleClass: 'show'
    }) : this.setState({
      toggleClass: 'hide'
    })
  }


  render() {
    return (
      <div className="Stem">

        {/* SEO */}

        <Helmet>
          <title>AVC STEM</title>
          <meta name="description" content='' />
        </Helmet>

        {/* Router */}
        <Router basename={'/edu/avc_language/STEM/'}>

          {/* Sidebar, static component   */}

          <Nav toggle={this.toggle.bind(this)} switch={this.switchMode.bind(this)} navBg={this.state.navBg} bg={this.state.navUserBg} color={this.state.color} toggleClass={this.state.toggleClass} />
          <div className="wrapper">
            {/* Header , static component   */}

            <Header toggle={this.toggle.bind(this)} bg={this.state.bg} color={this.state.color} />
            
            {/* Content, dynamic components */}
            <Switch>
              <Route path='/' exact>
                <Home toggle={this.toggle.bind(this)} bg={this.state.bg} color={this.state.color} />
              </Route>
              <Route path='/:category/' exact>
                <Category bg = {this.state.contentBg} itemBg = {this.state.itemBg} itemTitle = {this.state.itemTitle} color = {this.state.itemColor}/>
              </Route>
              <Route path='/:category/:transfer/'>
                  <Transfer bg = {this.state.contentBg} itemBg = {this.state.itemBg} itemTitle = {this.state.itemTitle} color = {this.state.itemColor}/>
                </Route>
            </Switch>
            {/* Footer , static component   */}
            <Footer bg={this.state.bg} color={this.state.color} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
