import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './todoSlice'

const TodosList = () => {
    const todosData = useSelector((state) => state.todos)
    console.log('todosData', todosData)

    const dispatch = useDispatch()

    return (
        <>
            {todosData.map((item) => (
                <div className='flex justify-center bg-gray-200 p-2'>

                    <div key={item.id}
                        className='mt-4 flex justify-between'
                    >
                        <div className='bg-purple-300 px-12 py-1 mx-6'>
                            {item.text}
                        </div>

                        <button
                            onClick={() => dispatch(removeTodo(item.id))}
                            className='text-white bg-red-500 border-0
                                   py-1 px-4 mx-9 focus:outline-none
                                   hover:bg-red-600 rounded text-md'
                        >
                            Delete
                        </button>
                    </div>

                </div>
            ))}
        </>
    )
}

export default TodosList