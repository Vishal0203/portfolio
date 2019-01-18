import { Container } from '../components/styles/Layout'
import { colors } from '../components/styles/GlobalStyles'
import { Content, PageTitle } from '../components/styles/GeneralStyles'

const About = () => (
  <Container>
    <PageTitle color={colors.app.primary}>
      About
    </PageTitle>
    <Content>
      <p>Hi, I'm Vishal Sharma.</p>
    </Content>
  </Container>
);

export default About;
