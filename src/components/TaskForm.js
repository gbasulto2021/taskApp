import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, editTask } from "../features/task/taskSlice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const defaultTask = {
    title: "",
    description: "",
  };
  const [task, setTask] = useState(defaultTask);
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state=> state.tasks)
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id){
        dispatch(editTask(task))
    }else{

      const taskId = uuid();
      dispatch(addTask({ ...task, id: taskId }));
    }
    navigate("/")
  };

  useEffect(() => {
    if (params.id){
      let taskToEdit = tasks.find(task=> task.id === params.id)
      setTask(taskToEdit)
      
    }
  }, [params.id, tasks])

  return (
    <form className="bg-zinc-800 mxx-w-sm p-4" onSubmit={handleSubmit}>
      <label htmlFor="title" className="block text-sm font-bold mb-2">Task:</label>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 nb-2"
      />
      <label htmlFor="description" className="block text-sm font-bold mb-2">Description:</label>
      <textarea
        name="description"
        placeholder="description"
        value={task.description}
        onChange={handleChange}
        className="w-full p-2 rounded-md bg-zinc-600 nb-2"
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1 rounded-md">Save</button>
    </form>
  );
};

export default TaskForm;
