/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// @flow
import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import '../styles/ProjectDetails.scss';

class ProjectDetails extends PureComponent {
  goBack = () => window.history.back(); // The function allows you to return to the previous page.

  render() {
    // eslint-disable-next-line react/prop-types
    const { projects } = this.props;
    // eslint-disable-next-line react/prop-types
    const params = this.props.match.params.id; // Get the id by the pathname.
    // eslint-disable-next-line radix
    const projectsMap = projects.filter((project) => project.id === parseInt(params)); // Filters the array of objects by its id, comparing it to the path id.

    return (
      <div className="ProjectDetails">
        {
          projectsMap.map((project, i) => (
            <div className="project" key={i}>
              <header>
                <h3>{project.name}</h3>
                <button type="button" onClick={this.goBack}>Retour</button>
              </header>
              <div className="cardInformations">
                <p className="description">
                  <span className="text">Description : </span>
                  {project.description}
                </p>
                <p className="days">
                  <span className="text">Nb de jours : </span>
                  {project.days}
                </p>
                <p className="startDate">
                  <span className="text">Date de début : </span>
                  {moment(project.startDate).format('DD MMMM YYYY')}
                </p>
                <p className="endDate">
                  <span className="text">Date de fin : </span>
                  {moment(project.endDate).format('DD MMMM YYYY')}
                </p>
              </div>
              <div className="cardResources">
                <h3>Liste des ressources</h3>
                <div className="keys">
                  <h6 className="title">Nom</h6>
                  <h6 className="title">Description</h6>
                  <h6 className="title">Nb de jours</h6>
                </div>
                {
                  project.resources.map((resource, j) => (
                    <div className="values" key={j}>
                      <p className="text">{resource.name}</p>
                      <p className="text">{resource.description}</p>
                      <p className="text">{resource.days}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.PROJECT.projects.collection,
});

export default connect(mapStateToProps, null)(ProjectDetails);
