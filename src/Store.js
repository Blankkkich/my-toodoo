import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./Slice";

export const store = configureStore({
    reducer: {
        tasks: taskSlice,
    },
});
