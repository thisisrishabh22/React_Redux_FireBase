import React from 'react'
import { useParams } from 'react-router'

const ProjectDetails = () => {

    const slugId = useParams();
    console.log(slugId);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">
                        Project Title
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi sunt facilis sequi. Nam sit animi enim pariatur dolor labore nihil nesciunt ut vero odit. Nulla consequatur modi tenetur ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laborum esse nostrum hic impedit unde veniam doloremque, asperiores doloribus nesciunt earum iusto labore quod vel dicta qui alias omnis. Voluptas.</p>
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
