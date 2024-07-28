import { configureStore } from "@reduxjs/toolkit";
import { levelsSlice } from "./slices/commonFiltersSlice";


const store = configureStore({
    reducer: {
        userLevels: levelsSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;