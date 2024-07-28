import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";



// type

export type State = {
  levels: null | string[];
};

const initialState: State = {
    levels: null
}

export const levelsSlice = createSlice({ 
  name: 'levels',
  initialState,
  reducers: {

  }

})

export const loadLevels = (state: RootState) => state.levels;

export default levelsSlice.reducer;