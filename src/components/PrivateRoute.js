import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute(props) {

    const { Component } = props;
    const { currentUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!currentUser) {
            navigate('/login')
        }
    })

  return (
        // <Route
        //     {...rest}
        //     render={props => {
        //         return currentUser ? <Component {...props} /> : <Navigate to="/login" />
        //     }}
        // >
        // </Route>

        <div>
            { currentUser && <Component /> }
        </div>

  )
}
