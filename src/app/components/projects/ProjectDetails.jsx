import React from 'react'
import { useParams } from 'react-router'

const ProjectDetails = ({ project }) => {

    const slugId = useParams();
    console.log(slugId);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">
                        {project.title}
                    </div>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by XAe-12</div>
                    <div>13 September 2021</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
