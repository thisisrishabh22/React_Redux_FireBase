import React from 'react'
import { useContext } from 'react'
import { ReactReduxContext, useSelector } from 'react-redux'
import ProjectList from '../projects/ProjectList'
import Notifactions from './Notifactions'

const Dashboard = () => {
    const { store } = useContext(ReactReduxContext)

    const projects = useSelector(state => { if (state) return state.project });
    console.log(store)

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects.projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifactions />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;