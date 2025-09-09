import React, { useState } from 'react'
import SingleItem from './SingleItem'

const Items = ({ tasks, deleteTask, editTask }) => {
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')
    const [editDesc, setEditDesc] = useState('')


    const startEdit = (task) => {
        setEditingId(task.id)
        setEditText(task.title)
        setEditDesc(task.deskripsi || '')

    }

    const cancelEdit = () => {
        setEditingId(null)
        setEditText('')
        setEditDesc('')
    }
    const handleEdit = async (id) => {
        try {
            await editTask(id, {
                title: editText,
                deskripsi: editDesc,
                status: false,
            })
            setEditingId(null)
            setEditText('')
            setEditDesc('')
        } catch (error) {
            console.log('error editing text', error);
        }
    }

    const toggleComplete = async (task) => {
        try {
            await editTask(task.id, {
                status: !task.status
            })
        } catch (error) {
            console.log('error updating task', error);
        }


    }


    return (
        <div className="items">
            {tasks.map((task) => {
                return (
                    <SingleItem key={task.id}
                        toggleComplete={toggleComplete}
                        editTask={editTask}
                        task={task}
                        deleteTask={deleteTask}
                        editText={editText}
                        editDesc={editDesc}
                        handleEdit={handleEdit}
                        startEdit={startEdit}
                        cancelEdit={cancelEdit}
                        isEditing={editingId === task.id}
                        setEditDesc={setEditDesc}
                        setEditText={setEditText}
                    />
                )
            })}

        </div>
    )
}

export default Items