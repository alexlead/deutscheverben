import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { loadArrayFromLocalStorage, saveArrayToLocalStorage } from "../../helpers/localStorage";




interface IUserListState {
    userVerbenList: string[];
};

const initialState: IUserListState = {
    userVerbenList: [...loadArrayFromLocalStorage('verbenList')]
};

export const userListSlice = createSlice({
    name: "verbenList",
    initialState,
    reducers: {
        addVerbId: (state, action) => {
            const index = state.userVerbenList.indexOf(action.payload);
            if (index === -1) {
                state.userVerbenList.push(action.payload);
                saveArrayToLocalStorage('verbenList', [...state.userVerbenList]);
            }
        },
        removeVerbId: (state, action) => {
            const index = state.userVerbenList.indexOf(action.payload);
            if (index !== -1) {
                state.userVerbenList.splice(index, 1);
                saveArrayToLocalStorage('verbenList', [...state.userVerbenList]);
            }
        }

    }
})

export const selectUserList = (state: RootState) => state.userList;

export const { addVerbId, removeVerbId } = userListSlice.actions;

export default userListSlice.reducer;