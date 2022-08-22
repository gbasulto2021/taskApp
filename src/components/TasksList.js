import { useSelector } from "react-redux";
import Task from "./Task";
import { Link } from "react-router-dom";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  // console.log(tasks);
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks {tasks.length}</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
