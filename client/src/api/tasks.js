import axios from './axios.js';

export const getTasksRequest = () => axios.get(`/tasks`)
export const getTaskRequest = (id) => axios.get(`/tasks/${task.id}`)
export const createTaskRequest =(task) => axios.post(`/tasks`, task)
export const updateTaskRequest = (task) => axios.put(`/tasks/${task.id}`, task)
export const deleteTaskRequest = (task) => axios.delete(`/tasks/${task.id}`)
