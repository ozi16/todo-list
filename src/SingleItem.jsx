import React, { useState } from 'react'


const SingleItem = ({
    task,
    deleteTask,
    handleEdit,
    startEdit,
    cancelEdit,
    editText,
    editDesc,
    isEditing,
    setEditDesc,
    setEditText,
    editTask,
    toggleComplete,
}) => {
    const [showDesc, setShowDesc] = useState(false)


    return (
        <div className="single-item">

            {isEditing ? (
                // mode edit
                <div className="edit-mode">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className='edit-input'
                    />
                    <textarea
                        value={editDesc}
                        onChange={(e) => setEditDesc(e.target.value)}
                        className='edit-textarea'
                        placeholder='deskripsi text...'
                    />
                    <div className="edit-button">
                        <button
                            className='btn-save'
                            onClick={() => handleEdit(task.id)}
                        >
                            Save
                        </button>
                        <button
                            className='btn-cancel'
                            onClick={cancelEdit}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                // Mode view
                <>
                    <input
                        type="checkbox"
                        checked={task.status}
                        onChange={() => editTask(task.id, {
                            ...task,
                            status: !(task.status || task.status)
                        })}
                    />

                    <div className="task-content">
                        <div className="task-header">
                            <p className='task-title' style={{ textTransform: 'capitalize', textDecoration: task.status && 'line-through' }} onClick={() => toggleComplete(task)}>{task.title}</p>
                            <button
                                className={`toggle-desc-btn ${showDesc ? 'expended' : ''}`}
                                onClick={() => setShowDesc(!showDesc)}
                            >
                                ▼
                            </button>
                        </div>

                        {showDesc && task.deskripsi && (
                            <div className="task-desc">
                                <p>{task.deskripsi}</p>
                            </div>
                        )}
                    </div>

                    {/* <div className="task-date">{new Date().toLocaleDateString()}</div> */}

                    <div className="action-buttons">
                        <button className='btn-edit' onClick={() => startEdit(task)}>Edit</button>
                        <button className='btn-delete' onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default SingleItem