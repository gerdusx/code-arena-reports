import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum FindingMode {
    None,
    Add,
    Edit
}

type InitialState = {
    mode?: FindingMode;
};
const initialState: InitialState = {
    mode: FindingMode.None,
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
