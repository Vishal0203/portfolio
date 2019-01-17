import styled from 'styled-components';
import { transparentize } from 'polished'
import { colors } from '../components/styles/GlobalStyles';
import { media } from '../components/styles/Mixins';

const HomePage = styled.div`
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
  color: ${colors.app.primary};
  user-select: none;
  
  .container {
    position: relative;
  }
`;

const Span = styled.span`
  display: block;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: transparentize($primary-color, .3);
  font-size: .8em;
`;

const Home = () => (
  <HomePage>
    <div className="container">
      <span className="iam iam--fade-in-left">I'm</span>
      <span className="name">Vishal</span>
      <div className="designation designation--fade-in-right">
        <span>A Web development</span>
        <span>engineer</span>
      </div>
    </div>
  </HomePage>
);

export default Home;
