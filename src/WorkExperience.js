import React, { Component } from 'react';
import './Style.css';
import SiteNav from './SiteNav'
import WorkExperienceItem from './WorkExperienceItem'

class WorkExperience extends Component {
    render() {
        return (
            <div className="work_experience">
                <header>
                    <h1>Myles's Work Experience</h1>
                    <SiteNav>
                    </SiteNav>
                </header>
                 
                <section>
                    <div className="experience">
                        <WorkExperienceItem company='ONYX Graphics' jobRole='International Inside Sales Rep' dates='08/2018 - Present' responsibility1='Kill IT' responsibility2='Revive IT' responsibility3='Continue Killing IT'/>
                    </div>

                    <div className="experience">
                        <WorkExperienceItem company='ONYX Graphics' jobRole='Order Entry Specialist' dates='06/2017 - 05/2018' responsibility1='' responsibility2='' responsibility3=''/>    
                    </div>

                    <div className="experience">
                        <WorkExperienceItem company='ONYX Graphics' jobRole='QA Software Tester' dates='06/2017 - 05/2018' responsibility1='' responsibility2='' responsibility3=''/>
                    </div>

                    <div className="experience">
                        <WorkExperienceItem company='Best Buy' jobRole='Sales Associate' dates='10/2014-03/2016' responsibility1='' responsibility2='' responsibility3=''/>
                    </div>
                </section>
            </div>
        )
    }

}

export default WorkExperience