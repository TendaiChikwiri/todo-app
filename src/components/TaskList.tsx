import { TiTick } from "react-icons/ti";
import { ImBin } from "react-icons/im";

type Task = {
	id: number;
  title: string;
	detail: string;
	completed: boolean;
}

interface Props {
	tasks: Task[];
	deleteTask: (id: number) => void;
	toggleComplete: (id: number) => void
}

const TaskList = ({ tasks, deleteTask, toggleComplete }: Props) => {


	return (
		<ul className="task-list p-4 md:p-8 ">
			{tasks.map((task) => (
				<li key={task.id} className="transition-all duration-500 bg-white task shadow-xl rounded-lg p-6">
          <h2 className="mb-4 font-medium text-2xl">{task.title}</h2>
					<h3>{task.detail}</h3>
					<div className="mt-1 flex items-center">
						<button disabled={task.completed} className="m-0 bg-blue-300 p-1 m-1 rounded text-sm" onClick={() => toggleComplete(task.id)} >{task.completed ? <><TiTick className="text-xl text-green-600" /></>: "Mark as complete"}</button>
						<button className="bg-red-400 p-1 m-1 rounded text-sm" onClick={() => deleteTask(task.id)} ><ImBin /></button>
					</div>
				</li>
			))}
		</ul>
	)
}

export default TaskList
