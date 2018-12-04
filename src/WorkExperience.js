import React, { Component } from 'react';
import './Style.css';

class WorkExperience extends Component {
    render () {
        return (
            <div className="work_experience">
                <h1>My Work Experience</h1>
                <section>
                    <div className="experience_entry">
                        <h3>
                            <span>International Inside Sales Rep</span><span>Onyx Graphics</span><span>08/2018 - Present</span>
                        </h3>
                        <p>Assist Territory Sales Managers and Resellers in the Europe Middle-East
                            and Africa region. Identify and follow-up on leads that come in through
                            our various marketing means. Create and provide new sales
                            opportunities for the Territory Sales Managers and Resellers in the
                            region. Ensure closure of sales and answer questions. All in an effort to
                            increase sales and generate company revenue. Answer incoming phone
                            calls and support the US Inside Sales Rep as needed.</p>
                    </div>


                    <div className="experience_entry">

                        <h3>
                            <span>Order Entry Specialist</span><span>Onyx Graphics</span><span>06/2017 - 05/2018</span>
                        </h3>
                        <p>Identified issues and discrepancies on product orders from our resellers
                            and partners. Processed orders in an accurate and consistent manner,
                            with an acute eye for detail. Handled inbound and outbound customer
                            service and order entry calls relating to questions about orders, our
                            product and order discrepancies. I also worked with customers from all
                            around the globe to ensure consistency in all processes.
                        </p>

                    </div>


                    <div className="experience_entry">
                        <h3>
                            <span>QA Software Tester</span><span>Onyx Graphics</span><span>06/2017 - 05/2018</span>
                        </h3>
                        <p>Tested RIP software in an AGILE/SCRUM development environment. To
                            ensure the highest quality product for our end users. I worked with
                            many development tools, such as Jira, Confluence, TestRail, AccuRev,
                            and many others. I received two performance awards in my first year
                            for my ability to learn and adapt.
                        </p>
                    </div>


                    <div className="experience_entry">

                        <h3>
                            <span>Sales Associate</span><span>Best Buy</span><span>10/2014-03/2016</span>
                        </h3>
                        <p>Demonstrate my ability to learn and adapt in various positions from the
                            sales floor and customer service to merchandising. I excelled with
                            learning new products and presenting customer service ideals in a
                            positive way.
                        </p>

                    </div>
                </section>
            </div>
        )
    }

}

export default WorkExperience