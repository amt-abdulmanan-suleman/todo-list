import React from 'react'
import useStore, { Task } from '../store'

const List = ({title, id, completed}: Task) => {
  const deleteTask = useStore(state=> state.deleteTask)
  const completeTask = useStore(state=> state.completeTask)
  const handleDelete = () => {
    deleteTask(id)
  }
  const handleDone = () => {
    completeTask(id)
  }
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <div className='border w-[5px] h-[5px] rounded-full cursor-pointer bg-slate-600'></div>
            <p data-testid='title' className={`${completed ? "line-through text-gray-200": ""}`}>
                {title} 
            </p>
        </div>
        <div className='flex items-center gap-5'>
            <button onClick={handleDelete} data-testid='remove' className='w-5 h-5 bg-red-200 text-red-700 rounded flex items-center justify-center text-sm'>X</button>
            <button onClick={handleDone} className='p-1 bg-green-200 text-green-700 rounded flex items-center justify-center text-sm'>Done</button>
        </div> 
    </div>
  )
}

export default List