import React, { Component } from 'react';
import SiteNav from './SiteNav'
import ProjectItem from './ProjectItem'

class ProjectsPage extends Component {
    render() {
        return (
            <div className="projects_page">
                <header>
                    <h1>Myles's Projects</h1>
                    <SiteNav>
                    </SiteNav>
                </header>
                <main className="projects">
                    <div>
                        <ProjectItem name='About Me' dates='November 13, 2018 - In Progress' description='A project which acts like an online resume webpage. Including Biography, Work Experience and Projects page'/>
                    </div>

                    <div>
                        <ProjectItem name='TV Demo Front End' dates='November 19, 2018 - In Progress' description='This project involves creating a web-based video streaming service akin to Netflix.'/>
                    </div>
                </main>
            </div>
        )
    }

}

export default ProjectsPage