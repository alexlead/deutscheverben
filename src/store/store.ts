import { configureStore } from "@reduxjs/toolkit";
import verbenSlice from "./slices/verbenSlice";
import levelFiltersSlice from "./slices/levelFiltersSlice";
import userListSlice from "./slices/userListSlice";


const store = configureStore({
    reducer: {

        verben: verbenSlice,
        filterLevels: levelFiltersSlice,
        userList: userListSlice,

    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;