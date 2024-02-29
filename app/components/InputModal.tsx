"use client"

import React, { ChangeEvent, useState } from 'react'
import useStore, { Task } from '../store'

const InputModal = () => {
    const setIsModal = useStore((state)=>state.setIsModal)
    const [title, setTitle] = useState("")
    const handleClick = () => {
        setIsModal()
    }
   
    const setTasks = useStore(state=>state.setTasks)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleSubmit = () => {
        if(title!=="") {
            const task:Task = {
                id: new Date().getTime(),
                title: title,
                completed: false
            }
            setTasks(task)
            setTitle('')
            console.log(task)
            setIsModal()
        }else{
            setIsModal()
        }
        
    }

    
  return (
    <div className='relative p-10'>
        <button className='absolute top-[10px] right-5 font-bold rounded-full px-1 text-red-700 bg-red-300' onClick={handleClick}>X</button>
        <div className='flex'>
            <div>
                <label htmlFor="tasks"/>
                <input type="text" data-testid='tasks' id='tasks' className='border h-10 w-[400px] pl-3 focus:outline-none rounded-tl-md rounded-bl-md' placeholder='write your to do task' value={title}  onChange={handleChange}/>
            </div>
            <button className='py-2 px-4 bg-blue-300 text-white rounded-tr-md rounded-br-md' onClick={handleSubmit}>Add</button>
        </div>
    </div>
  )
}

export default InputModal