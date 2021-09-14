import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ReactReduxContext } from 'react-redux'
import { useSelector } from 'react-redux'
import ProjectList from '../projects/ProjectList'
import Notifactions from './Notifactions'
import firebaseConfig from '../../config/firebase/firebaseConfig'
import 'firebase/firestore';

const Dashboard = () => {
    const { store } = useContext(ReactReduxContext);
    let firestore = useSelector(state => { if (state) return state });
    const projects = useSelector(state => { if (state) return state.project });
    console.log(firestore)

    const projectobj = firebaseConfig.firestore().collection('projects')
    console.log(projectobj)

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