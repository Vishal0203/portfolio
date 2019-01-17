import Link from 'next/link';
import { StyledNav, NavItem } from './styles/Header'
import { colors } from './styles/GlobalStyles';

const Nav = () => {
  return (
    <StyledNav>
      <NavItem color={colors.accent.tallPoppy}>
        <Link prefetch href='/about'>
          <a>about</a>
        </Link>
      </NavItem>
      <NavItem color={colors.accent.danube}>
        <Link prefetch href='/projects'>
          <a>projects</a>
        </Link>
      </NavItem>
      <NavItem color={colors.accent.silverTree}>
        <Link prefetch href='/contact'>
          <a>contact</a>
        </Link>
      </NavItem>
      <span className='nav--collapsed ic-menu' />
    </StyledNav>
  )
};

export default Nav;
