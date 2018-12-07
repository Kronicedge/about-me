import React, { Component } from 'react'

class ProjectItem extends Component {
    render = () => {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <ul>
                    <p>
                        <li>{this.props.dates}</li>
                        <li>{this.props.description}</li>
                    </p>
                </ul>
            </div>
        )
    }
}

export default ProjectItem