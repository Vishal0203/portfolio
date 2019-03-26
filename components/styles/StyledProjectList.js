import styled from 'styled-components'
import ProjectList from '../ProjectList'
import { media } from './Mixins'

export const StyledProjectList = styled(ProjectList)`
  padding: 0;
  list-style: none;
  
  li {
    margin-bottom: 2.5em;
      
    a {
      font-size: 1.2em;
      font-weight: 500;
      
      ${media.tabletPortrait`
        font-size: 1.4em;
      `}
    }
    
    p {
      margin: .5em 0;
    }
  }
`;
