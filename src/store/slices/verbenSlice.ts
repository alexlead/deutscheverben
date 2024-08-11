import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";
import verben from '../../assets/data/verbs.json';
import { verb } from '../../types/dataTypes';

interface IVerbenState {
    verbList: verb[];
    filteredVerbenList: verb[];
};

const initialState: IVerbenState = {
    verbList: [...verben],
    filteredVerbenList: [...verben]
};

export const verbenSlice = createSlice({
    name: "verben",
    initialState,
    reducers: {

    }
})

export const selectVerben = (state: RootState) => state.verben;

export default verbenSlice.reducer;