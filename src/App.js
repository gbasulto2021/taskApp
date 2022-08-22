import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
