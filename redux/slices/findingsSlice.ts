import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFinding } from "../../interfaces/IFinding";

export enum FindingMode {
    View,
    Add,
    Edit
}

type InitialState = {
    mode?: FindingMode;
    selectedFinding?: IFinding;
};
const initialState: InitialState = {
    mode: FindingMode.View,
};

const findingsSlice = createSlice({
    name: "findings",
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<FindingMode>) => {
            state.mode = action.payload;
        }
    },
});

export default findingsSlice.reducer;
export const { setMode } = findingsSlice.actions;
