import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import projects from './data/projects'

const Project = ({ project }) => {
  return (
    <li>
      <a className="title" target="_blank" href={project.link}>{project.title}</a>
      <p>
        {project.description}
        {project.tech && <Fragment><br/> Built with: {project.tech}</Fragment>}
      </p>
    </li>
  )
}

class ProjectList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className={this.props.className}>
        {Array.from(projects).map((project, i) => <Project key={i} project={project}/>)}
      </ul>
    )
  }
}

ProjectList.propTypes = {
  className: PropTypes.string
}

Project.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectList
