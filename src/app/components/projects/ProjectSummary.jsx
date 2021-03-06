import React from 'react'

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <div className="card-title">{project.title}</div>
                <p>Posted by Xae-12</p>
                <p className="grey-text">13 September 2021</p>
            </div>
        </div>
    )
}

export default ProjectSummary;