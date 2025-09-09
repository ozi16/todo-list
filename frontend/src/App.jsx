import { useEffect, useState } from 'react'
import Form from './Form'
import Items from './Items'
import axios from 'axios';


const API_BASE_URL = 'https://accomplished-energy-production.up.railway.app';


function App() {

  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/`)
      setTasks(response.data);
      console.log('Data berhasil diambil:', response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const addTask = async (taskTitle, taskDesc) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/`, {
        title: taskTitle,
        deskripsi: taskDesc,
        status: false
      });
      setTasks([...tasks, response.data])
      return response.data
    } catch (error) {
      console.log("Error adding task", error);
    }
  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/${id}`);
      setTasks(tasks.filter(tasks => tasks.id !== id));
    } catch (error) {
      console.log("error delete task", error);
    }
  }

  const editTask = async (id, updateData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/${id}`, updateData)
      setTasks(tasks =>
        tasks.map(task =>
          task.id === id ? response.data : task
        )
      )
      console.log("task berhasil diupdate", response.data);
      return response.data
    } catch (error) {
      console.log("tidak berhasil di update", error);
    }
  }


  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <section className='section-center glass'>
      <Form addTask={addTask} />
      <Items tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </section>

  )
}



export default App
