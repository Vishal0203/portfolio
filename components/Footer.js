import { StyledFooter } from './styles/Footer'

const Footer = () => (
  <StyledFooter>
    <ul className="social">
      <li>
        <a href="https://github.com/Vishal0203" target='_blank'>
          <span className='ic-github' />
        </a>
      </li>
      <li>
        <a href="https://stackoverflow.com/users/4159199/vishal-sharma" target='_blank'>
          <span className='ic-stackoverflow' />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/vishal-sharma-9072b65b/" target='_blank'>
          <span className='ic-linked' />
        </a>
      </li>
    </ul>
    <div className="download-resume">
      <a target="_blank" href="/static/vishal_res.pdf">Resume</a>
    </div>
  </StyledFooter>
);

export default Footer;
