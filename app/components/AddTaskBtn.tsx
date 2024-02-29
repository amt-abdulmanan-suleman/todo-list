import React from 'react'
import useStore from '../store'

const AddTaskBtn = () => {
    const setIsModal = useStore(state=>state.setIsModal)
    const handleClick = () => {
        setIsModal()
    }
  return (
    <div className='border absolute bottom-[-20px] left-[40%] z-1 px-6 py-1.5 bg-blue-300 rounded text-white'>
        <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default AddTaskBtn