/* eslint-disable react/prop-types */
import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import Loader from '../components/Shared/Loader'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()
  if (loading) return <Loader />
  if (user) {
    console.log(user)
    console.log('navigating to dashboar')
    return children
  } else {
    console.log(user)
    console.log('navigating to login')
    return <Navigate to='/login' state={{ from: location }} replace='true' />
  }
}

export default PrivateRoute
