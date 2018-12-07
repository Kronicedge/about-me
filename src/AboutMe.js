import React, { Component } from 'react'
import SiteNav from './SiteNav'


class AboutMe extends Component {
    render() {
        return (

            <div className="about_me">
                <h1>About Myles</h1>
                <header>
                    <SiteNav/>               
                </header>
                
                <section className="bio">
                    <img src="https://media.licdn.com/dms/image/C5603AQFW773b85y_Nw/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=QpRd56M4dViJw99AvSlb-oktg5_ayruUFuEe7UJBE5I" alt='Self Portrait'/>
                    <span>
                        <h3>My Biography</h3>
                    </span>
                    <span>
                        <p>My name is Myles, I'm 24 years old and I'm from Utah. I like to skateboard, snowboard, golf, and
                            play
                            video games.</p>
                    </span>
                </section>

                <section className="helio">
                    <h3>Why Helio?</h3>
                    <p>I would like to change careers and I hope that going through the Helio Training bootcamp to make that
                        possible.</p>
                </section>

                <section className="links">
                    <h3>Other Info</h3>
                    <ul>
                        <li><a href="/work-history">Work Experience</a></li>
                        <li><a href="https://www.linkedin.com/in/myles-timothy-102725146/">My LinkedIn Profile</a></li>
                        <li><a href="https://github.com/Kronicedge">My Github profile</a></li>
                    </ul>
                </section>

                <section className="contact">
                    <h3>Contact Me</h3>
                    <form>
                        <div>
                            <label>Name:</label>
                            <input type="text" name="name" />
                        </div>

                        <div>
                            <label>Email:</label>
                            <input type="text" name="email" />
                        </div>

                        <div>
                            <label>Request:</label>
                            <textarea name="message" rows="10" cols="30"></textarea>
                        </div>

                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </section>
            </div>
        )
    }

}








export default AboutMe;