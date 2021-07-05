import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./index.css"

function App() {
  type Task = {
    id: number;
    title: string;
    detail: string;
    completed: boolean;
   }

  const [tasks, setTasks] = useState<Task[]>([])

  // Fetch Data from localStorage
  useEffect(() => {
    let data:Task[] | undefined = JSON.parse(localStorage["data"])
    if (typeof data === "undefined"){
      return
    }
    console.log("ran")
    setTasks(
      data
      )
  },[])


  // save to localStorage
  const saveLocalStorage=(param:Task[]):void=>{
    localStorage.removeItem("data");
    localStorage["data"] = JSON.stringify(param);
  }

  // Add tasks to tasks list
	const addTask = (): void => {
    let id = Math.floor(Math.random() * 10000) + 1 
    let detail = (document.getElementById("newTask") as HTMLInputElement).value;
		let title = (document.getElementById("newTitle") as HTMLInputElement).value;
    if (title === ""){
      alert("Title cannot be empty")
      return
    }
    (document.getElementById("newTitle") as HTMLInputElement).value = "";
    (document.getElementById("newTask") as HTMLInputElement).value = "";
    let newTask ={
      id: id,
      title: title,
      detail: detail,
      completed: false
      }
    let taskArray = [...tasks, newTask]
    saveLocalStorage(taskArray)
    setTasks(
      taskArray
    )


	}
	const deleteTask = (id: number): void => {
    let deleted = tasks.filter(task => task.id !== id);
    saveLocalStorage(deleted)
		setTasks(
			deleted
		)
	}
	const toggleComplete = (id: number)=> {
    let toggled = tasks.map((task) => (
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    saveLocalStorage(toggled)
    setTasks(
			toggled
		)
	}

	return (
		<div className="font-mono">
			<Header />
			<AddTask addTask={addTask} />
			<TaskList
				deleteTask={deleteTask}
				tasks={tasks}
				toggleComplete={toggleComplete}
			/>
		</div>
	); 
}

export default App;
