import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";
import { loadArrayFromLocalStorage, loadMyListStatus, saveArrayToLocalStorage, saveMyListStatus } from "../../helpers/localStorage";




interface ILevelFiltersState {
    filterLevelsArray: string[];
    filterMyList: boolean;
};

const initialState: ILevelFiltersState = {
    filterLevelsArray: [...loadArrayFromLocalStorage('levels')],
    filterMyList: loadMyListStatus(),
};

export const levelFiltersSlice = createSlice({
    name: "levels",
    initialState,
    reducers: {
        addLevel: (state, action) => {
            const index = state.filterLevelsArray.indexOf(action.payload);
            if (index === -1) {
                state.filterLevelsArray.push(action.payload);
                saveArrayToLocalStorage('levels', [...state.filterLevelsArray]);
            }
        },
        removeLevel: (state, action) => {
            const index = state.filterLevelsArray.indexOf(action.payload);
            if (index !== -1) {
                state.filterLevelsArray.splice(index, 1);
                saveArrayToLocalStorage('levels', [...state.filterLevelsArray]);
            }
        },
        toggleMyList: (state, action) => {
            state.filterMyList = action.payload;
            saveMyListStatus(action.payload)
        }

    }
})

export const selectLevels = (state: RootState) => state.filterLevels;

export const { addLevel, removeLevel, toggleMyList } = levelFiltersSlice.actions;

export default levelFiltersSlice.reducer;