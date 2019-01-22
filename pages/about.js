import { Container } from '../components/styles/Layout'
import { colors } from '../components/styles/GlobalStyles'
import { Content, PageTitle } from '../components/styles/GeneralStyles'

const About = () => (
  <Container>
    <PageTitle textColor={colors.app.primary}>
      About
    </PageTitle>
    <Content accent={colors.accent.mandy}>
      <p>Hi, I'm Vishal Sharma.</p>
      <p>
        I'm an enthusiastic Full-stack Developer, and professionally a Web Development Engineer for&nbsp;
        <a target="_blank" href="https://nowfloats.com">NowFloats Technologies</a> in Hyderabad, India, and a huge fan
        of Single Page Applications (SPAs), React JS and frameworks built around it. I work on every project
        that I find challenging, exciting and provides a gateway to learn and implement new things.
      </p>
      <p>
        Love to encourage budding engineers by delivering tech talks, motivational speeches, and workshops. I've
        delivered over 15 such sessions at <a target="_blank" href="http://www.smec.ac.in/">St. Martin's Engineering
        College</a> and <a target="_blank" href="https://www.iare.ac.in/">Institute of Aeronautical
        Engineering</a> in Hyderabad, India.
      </p>
      <p>
        I'm also a Teaching Assistant for <a target="_blank" href="http://missionrnd.com/">Mission R&D</a>, an
        organization that conducts Summer Coding Camps at IIIT Hyderabad. Over the past 2 years, I've delivered sessions
        on topics like JQuery, Bootstrap and Django forms.
      </p>
      <p>
        Please <a href='/contact'>contact me</a> if you would like to work on a project together, or just want to
        have long conversations about basketball and gaming!
      </p>
    </Content>
  </Container>
);

export default About;
