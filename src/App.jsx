import React, { useState } from 'react'
const App = () => {
  const [tasks, setTasks] = useState([])
  const [newTasks, setNewTasks] = useState("") 
  function handleInputChange(event) {
    setNewTasks(event.target.value)
  }
  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks(t => [...t, newTasks])
      setNewTasks(" ")
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks)
  }
  return (
    <> <div className='bg-zinc-900 w-full h-[100vh] flex justify-center items-center text-xl'>
      <div className='bg-zinc-500 w-2/5 h-[90%] flex justify-start items-start flex-col p-5 rounded-[50px]'>
        <h1 className='my-2  text-3xl font-extrabold'>Add Todo</h1>
        <div className='flex w-full justify-around items-center mb-3 cursor-pointer'>

          <div className="placeholder w-[100%]">
            <input value={newTasks} onChange={handleInputChange} className='w-[90%] text-left rounded-md px-2 border-4 border-yellow-500' type="text" placeholder='Enter Text ?' />
          </div>
          <i onClick={addTask} className="ri-save-fill text-3xl"></i>
        </div>

        <h1 className='text-2xl font-extrabold'> Yours Task</h1>

        {tasks.map((tasks, index) =>
          <div className=" text-3xl tasks w-full flex justify-between border-2 border-zinc-600 p-2 rounded-md mb-3">
            <h1> {tasks}</h1>
            <div>
              <i onClick={() => deleteTask(index)} className="text-xl ml-5 ri-delete-bin-line cursor-pointer"></i>
            </div>
          </div>
        )}
      </div>
    </div >
    </>
  )
}
export default App