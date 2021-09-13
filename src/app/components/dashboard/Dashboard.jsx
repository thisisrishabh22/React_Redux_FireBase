import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notifactions from './Notifactions'

const Dashboard = () => {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifactions />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;