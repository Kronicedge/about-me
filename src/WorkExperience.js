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
                    <SiteNav />
                </header>

                <section className='experience'>
                    <WorkExperienceItem company='ONYX Graphics' jobRole='International Inside Sales Rep' dates='08/2018 - Present' responsibility1='Follow up on leads that come in through various marketing means. Ensure leads result in a sale and follow-up as needed.' responsibility2='Generate recurring revenue by following up on all service plans' responsibility3='Support external sales teams and resellers with questions and orders as needed.' />
                    <WorkExperienceItem company='ONYX Graphics' jobRole='Order Entry Specialist' dates='06/2017 - 05/2018' responsibility1='Ensure accuracy and completeness of product orders from resellers and end users' responsibility2='Work towards sales goals by support the worldwide sales teams' responsibility3='Work with marketing and sales departments to implement promotions and special product pricing and skus' />
                    <WorkExperienceItem company='ONYX Graphics' jobRole='QA Software Tester' dates='06/2017 - 05/2018' responsibility1='Test and ensure high quality standards for software product development.' responsibility2='Work with others in the engineering team to validate completeness of test cases and test runs for full test regression of products' responsibility3='Work with Python and other programming tools to work on test automation for increased eficiency in testing.' />
                    <WorkExperienceItem company='Best Buy' jobRole='Sales Associate' dates='10/2014-03/2016' responsibility1='Keep up-to-date on the latest product information and details, so I can assist customers with making informed decisions' responsibility2='Work towards sales goals to ensure success of the company' responsibility3='Work with multiple departments to build a complete solution for customers and ensure customer satisfaction' />
                </section>
            </div>
        )
    }

}

export default WorkExperience