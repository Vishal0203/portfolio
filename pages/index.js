import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { colors } from '../components/styles/GlobalStyles'
import * as animations from '../components/styles/Animations'
import { media } from '../components/styles/Mixins'

const animation = props =>
  css`
    ${props.animate} .8s ease-in-out .2s forwards
  `;

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
  letter-spacing: 2px;
  color: ${transparentize(.3, colors.app.primary)};
  font-size: .7em;
  line-height: 1.8;
  font-weight: 500;
  
  ${media.tabletPortrait`
    letter-spacing: 3px;
    font-size: 1em;
  `}
`;

const Iam = styled(Span)`
  position: absolute;
  top: -20px;
  opacity: 0;
  animation: ${props => props.animate ? animation : 'none'}
`;

const Name = styled(Span)`
  font-size: 4.5em;
  font-weight: 700;
  color: ${colors.app.primary};
  line-height: normal;
  text-shadow: 0 8px 16px ${transparentize(.5, colors.app.secondary)};
  
  ${media.tabletPortrait`
    font-size: 8em;
  `}
  
  ${media.tabletLandscape`
    font-size: 9em;  
  `}
`;

const Designation = styled.div`
  position: absolute;
  right: 0;
  opacity: 0;
  text-align: right;
  animation: ${animation}
`;

const Home = () => (
  <HomePage>
    <div className="container">
      <Iam animate={animations.fadeInLeft}>I'm</Iam>
      <Name className="name">Vishal</Name>
      <Designation animate={animations.fadeInRight}>
        <Span>A Web development</Span>
        <Span>engineer</Span>
      </Designation>
    </div>
  </HomePage>
);

export default Home;
