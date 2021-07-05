import { useEffect, useState } from "react";


interface Props {
	addTask: () => void;
}

const AddTask = ({ addTask }: Props) => {
  useEffect(() => {
    let form = document.getElementById("task-form");
    form!.style.display = "none"
  },[])

  const toggleForm = ():void=>{
    let form = document.getElementById("task-form");
    if (form!.style.display === "none") {
      form!.style.display = "block";
      setFormState(true)
    } else {
      form!.style.display = "none";
      setFormState(false)
    }
  }
  const [formState, setFormState] = useState<boolean>(false);

	return (
		<div className="flex flex-col justify-center items-center">
			<button className="border p-2 bg-gray-100 rounded-xl" onClick={toggleForm}>{formState? "Close Form": "Open Form"}</button>
			<form id="task-form" className="mt-4 flex flex-col justify-center items-center">
				<label htmlFor="newTitle" className="flex flex-col items-center">
        Title:
					<input className="mb-4 outline-none border rounded-xl p-2 shadow-lg" type="text" name="newTitle" id="newTitle" />
				</label>
				<label htmlFor="newTask" className="flex flex-col items-center">
          Details:
					<input className="mb-4 outline-none border rounded-xl p-2 shadow-lg" type="text" name="newTask" id="newTask" />
				</label>
				<button className="bg-green-500 p-4 rounded-xl justify-self-center" onClick={addTask} type="button">Add Task</button>
			</form>
		</div>
	)
}
export default AddTask
