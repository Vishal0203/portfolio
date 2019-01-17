import Link from 'next/link';
import Nav from './Nav';

import { StyledHeader, Brand } from './styles/Header';
import { colors } from './styles/GlobalStyles'

const Header = () => (
  <StyledHeader>
    <Link href='/' passHref>
      <Brand color={colors.bg.ripeLemon}>
        <span className='initials'>VS</span>
        <span className='fullname'>Vishal Sharma</span>
      </Brand>
    </Link>
    <Nav />
  </StyledHeader>
);

export default Header;