import React, { Component } from 'react'

import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import GlobalStyles from './styles/GlobalStyles'
import { StyledOverlayMenu } from './styles/OverlayMenu'

export const AppContext = React.createContext({})

class AppProvider extends Component {
  state = {
    showMenu: false
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        toggleMenu: () => this.setState(prevState => ({ showMenu: !prevState.showMenu }))
      }}>
        <GlobalStyles />
        <Meta />
        <Header />
        <StyledOverlayMenu />
        {this.props.children}
        <Footer />
      </AppContext.Provider>
    )
  }
}

export default AppProvider
