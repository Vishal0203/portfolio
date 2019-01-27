import styled from 'styled-components'
import { Container } from '../components/styles/Layout'
import { colors } from '../components/styles/GlobalStyles'
import { PageTitle } from '../components/styles/GeneralStyles'
import { Content } from '../components/styles/GeneralStyles'

const CenteredContent = styled(Content)`
  text-align: center;
`

const Projects = () => (
  <Container>
    <PageTitle textColor={colors.app.primary}>
      Projects
    </PageTitle>
    <CenteredContent>
    </CenteredContent>
  </Container>
);

export default Projects;
