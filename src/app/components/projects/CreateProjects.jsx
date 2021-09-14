import React, { useContext, useState } from 'react';
import { ReactReduxContext } from 'react-redux';
import { useSelector } from 'react-redux';
import { createProject } from '../../../store/actions/projectActions'

const CreateProject = () => {
    const [state, setState] = useState({
        title: '',
        content: ''
    })
    const handleChange = (e) => {
        state[e.target.id] = e.target.value;
        setState(state)
    }
    const {store} = useContext(ReactReduxContext);
    const createProjectSub = (project) => {
        store.dispatch(createProject(project));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(state);
        createProjectSub(state)
    }
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create a New Project</h5>
                <div className="input-field">
                    <input type="text" id='title' onChange={handleChange} />
                    <label htmlFor="title">Project Title</label>
                </div>
                <div className="input-field">
                    <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
                    <label htmlFor="content">Project Content</label>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProject;