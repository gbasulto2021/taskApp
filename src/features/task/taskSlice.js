import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "tarea 1", description: "Description 1" },
  { id: "2", title: "tarea 2", description: "Description 2" },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    // return [...state, action.payload]  (ojo a esto)

    },
    deleteTask: (state, action) => {
      const taskToDelete = state.find((task) => task.id === action.payload);
      if (taskToDelete) {
        state.splice(state.indexOf(taskToDelete), 1);
      }
      //  return state.filter(task=> task.id !== action.payload)   (Ojo a esto)
    },
    editTask: (state, action) => {
       
      const taskToEdit = state.find((task) => task.id === action.payload.id);
       if(taskToEdit){
        taskToEdit.title = action.payload.title
        taskToEdit.description = action.payload.description
       }

    // return state.map(task => task.id === action.payload.id ? action.payload: task) (Ojo a esto)
       
     
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
