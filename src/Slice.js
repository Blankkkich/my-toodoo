import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {

   //використовую це того що не розібрався з мокапі
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
});

const slice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload);
        },
        updateTask: (state, action) => {
            const { id, updatedTask } = action.payload;
            const taskIndex = state.findIndex((task) => task.id === id);
            if (taskIndex !== -1) {
                state[taskIndex] = updatedTask;
            }
        },
        clearAllTasks: (state) => {
            state.length = 0;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});
export const { addTask, deleteTask, updateTask, clearAllTasks } =
    slice.actions;
export default slice.reducer;