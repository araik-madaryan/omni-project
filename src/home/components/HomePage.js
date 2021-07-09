/* eslint-disable react/prop-types */
// @flow
import React, { PureComponent } from 'react';
import ProjectsList from '../../project/components/ProjectsList';
import '../styles/HomePage.scss';

class HomePage extends PureComponent {
  render() {
    return (
      <div className="home-page">
        <span>HomePage</span>
        <ProjectsList />
      </div>
    );
  }
}

export default HomePage;
