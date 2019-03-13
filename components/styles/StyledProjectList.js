import styled from 'styled-components'
import ProjectList from '../ProjectList'

export const StyledProjectList = styled(ProjectList)`
  padding: 0;
  list-style: none;
  
  li {
    margin-bottom: 2em;
      
    a {
      font-size: 1.4em;
      font-weight: 600;
    }
    
    p {
      margin: .8em 0;
    }
  }
`;
