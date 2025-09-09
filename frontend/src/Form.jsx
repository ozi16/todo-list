import axios from 'axios';
import React, { useState } from 'react'



const Form = ({ addTask }) => {
    // const [newTask, setNewTask] = useState('')
    // const [newDesc, setNewDesc] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addTask(title, description);
            console.log('berhasil menambahkan', title);
            setTitle('');
            setDescription('')
        } catch (error) {
            console.log('error adding task', error);
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         await axios.post(`${API_BASE_URL}/api/`, {
    //             title: newTask,
    //             deskripsi: newDesc,
    //             status: false
    //         })
    //         addTask(newTask)
    //         console.log('berhasil menambahkan', newTask);
    //         setNewTask('')
    //         setNewDesc('')
    //     } catch (error) {
    //         console.error('Error adding task:', error)
    //     }
    // }


    return (
        <section className='form'>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input
                        type="text"
                        className='form-input'
                        placeholder='masukan kegiatan'
                        // value={newTask}
                        value={title}
                        // onChange={(e) => setNewTask(e.target.value)}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        className='form-input'
                        placeholder='masukan catatan tentang kegiatan'
                        value={description}
                        // onChange={(e) => setNewTask(e.target.value)}
                        onChange={(e) => setDescription(e.target.value)}

                    />
                    <button type='submit' className='btn'>+</button>
                </div>
            </form>
        </section>

    )
}

export default Form