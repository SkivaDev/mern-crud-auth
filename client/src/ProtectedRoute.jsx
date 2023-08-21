import React from 'react'
import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {

  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <div>Loading...</div>
  }

  if (!loading && !isAuthenticated) {
    return <Navigate to="/login" replace/>
  }

  return <Outlet/>
}

export default ProtectedRoute