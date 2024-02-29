import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


export type Task = {
    id: number,
    title: string,
    completed: boolean
};

export type Store = {
    isModal: boolean,
    setIsModal: () => void,
    tasks: Task[],
    setTasks: (task: Task) => void,
    deleteTask: (id: number) => void,
    completeTask: (id: number) => void
};

const useStore = create<Store>()(persist((set) => ({
    isModal: true,
    setIsModal: () => set((state) => ({ ...state, isModal: !state.isModal })),
    tasks: [],
    setTasks: (task) => set((state) => ({ ...state, tasks: [...state.tasks, task] })),
    deleteTask: (id) => set((state) => ({ ...state, tasks: state.tasks.filter((task) => task.id !== id) })),
    completeTask: (id) => set((state) => ({...state, tasks: state.tasks.map(task=>(task.id === id ? {...task, completed: true}: task))}))
}),{name : "tasks", storage: createJSONStorage(()=> localStorage)}));

export default useStore;
