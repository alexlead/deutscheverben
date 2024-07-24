import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


// type

export type State = {
  levels: null | string[];
};

const initialState: State = {
    levels: null
}