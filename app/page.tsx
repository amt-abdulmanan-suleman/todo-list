"use client"
import AddTaskBtn from "./components/AddTaskBtn";
import Heading from "./components/Heading";
import InputModal from "./components/InputModal";
import List from "./components/List";
import ListContainer from "./components/ListContainer";
import useStore, {Task} from "./store";

export default function Home() {
  const isModal = useStore((state)=>state.isModal)
  const tasks = useStore(state=> state.tasks)
  
  return (
    <main className=" flex items-center justify-center  h-full relative">
      {isModal ? (
        <div className={`border rounded w-3/6 p-10 flex flex-col mt-10 gap-5`}>
          <Heading/>
          <ListContainer>
            {tasks.map((task: Task) => <List key={task.id} title={task.title} id={task.id} completed={task.completed}/> )}
            <AddTaskBtn/>
          </ListContainer>
        </div>
      ): (
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="absolute z-10 border rounded-md">
            <InputModal/>
          </div>
        </div> 
      )}
    </main>
  );
}
