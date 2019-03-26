import styled from 'styled-components'
import { Container } from '../components/styles/Layout'
import { Content, PageTitle, SubHeading } from '../components/styles/GeneralStyles'
import { colors } from '../components/styles/GlobalStyles'
import { media } from '../components/styles/Mixins'

const CenteredContent = styled(Content)`
  ${media.tabletPortrait`
    text-align: center;
  `}
  
  p {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Contact = () => (
  <Container>
    <PageTitle textColor={colors.app.primary}>
      Contact
    </PageTitle>
    <CenteredContent accent={colors.accent.silverTree}>
      <p>
        Feel free to contact me over email or phone.
        Always open to discuss new ideas!
      </p>
      <SubHeading>E-mail</SubHeading>
      <p>
        <a href="mailto:vish.sharma0203@gmail.com">vish.sharma0203@gmail.com</a>
      </p>
      <SubHeading>Phone</SubHeading>
      <p>
        <a href="tel:+918143468663">+91-8143468663</a>
      </p>
    </CenteredContent>
  </Container>
);

export default Contact;
