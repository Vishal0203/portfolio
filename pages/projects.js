import { Container } from '../components/styles/Layout'
import { colors } from '../components/styles/GlobalStyles'
import { PageTitle, Content } from '../components/styles/GeneralStyles'
import { StyledProjectList } from '../components/styles/StyledProjectList'

const Projects = () => (
  <Container>
    <PageTitle textColor={colors.app.primary}>
      Projects
    </PageTitle>
    <Content accent={colors.accent.danube}>
      <p>
        I've worked on many types of projects both personal and professional. Here are some of
        the projects that I've worked on.
      </p>
      <StyledProjectList />
    </Content>
  </Container>
);

export default Projects;
