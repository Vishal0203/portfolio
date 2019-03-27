import Link from 'next/link'
import Nav from './Nav'

import { StyledHeader, Brand } from './styles/Header'
import { colors } from './styles/GlobalStyles'
import { AppContext } from './AppProvider'
import { Fragment } from 'react'

const Header = () => (
  <StyledHeader>
    <AppContext.Consumer>
      {context => (
        <Fragment>
          <Link href='/' passHref>
            <Brand onClick={() => context.state.showMenu && context.toggleMenu()}  color={colors.bg.ripeLemon}>
              <span className='initials'>VS</span>
              <span className='fullname'>Vishal Sharma</span>
            </Brand>
          </Link>
          <Nav {...context} />
        </Fragment>
      )}
    </AppContext.Consumer>
  </StyledHeader>
)

export default Header
