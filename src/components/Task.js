import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/task/taskSlice";

const Task = ({ task }) => {
  const { id, title, description } = task;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="bg-neutral-800 p-4 rounded-md">
      <header className="flex justify-between">
        <h3>{title}</h3>
          <div className="flex gap-x-2">
          <Link  className="bg-zinc-600 px-2 py-1 text-xs rounded-md " to={`/edit-task/${id}`}>Edit</Link>
          <button className="bg-red-500 px-2 py-1 text-xs rounded-md " onClick={() => handleDelete(id)}>Delete</button>
          </div>
      </header>
      <p>{description}</p>
    </div>
  );
};

export default Task;
