/* eslint-disable react/prop-types */
// @flow
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import '../styles/ProjectsList.scss';

class ProjectsList extends PureComponent {
  render() {
    const { projects } = this.props;
    return (
      <div className="ProjectsList">
        <h1>Projets</h1>
        <div className="card">
          <div className="keys">
            <h6 className="title">Nom</h6>
            <h6 className="title">Description</h6>
            <h6 className="title">Début</h6>
            <h6 className="title">Fin</h6>
          </div>
          {
            projects.map((project, i) => (
              <Link to={`/project/${project.id}`} className="values" key={i}>
                <p className="text">{project.name}</p>
                <p className="text">{project.description}</p>
                <p className="text">{moment(project.startDate).format('DD MMM. YYYY')}</p>
                <p className="text">{moment(project.endDate).format('DD MMM. YYYY')}</p>
              </Link>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.PROJECT.projects.collection,
});

export default connect(mapStateToProps, null)(ProjectsList);
