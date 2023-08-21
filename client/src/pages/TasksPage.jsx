import React from 'react'
import { useAuth } from '../context/AuthContext'

function TasksPage() {

  const { user } = useAuth();
  console.log(user)
  return (
    <div>TasksPage: {user.username}</div>
  )
}

export default TasksPage