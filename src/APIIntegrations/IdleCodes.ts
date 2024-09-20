import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IdleCode } from "./types";

//#region reducer

interface IdleCodesArray {
  idleCodes: IdleCode[];
}

const initialState: IdleCodesArray = {
  idleCodes: []
};

export const IdleCodesSlice = createSlice({
  name: "idlecodes",
  initialState,
  reducers: {
    addIdleCode: (state, action: PayloadAction<IdleCode>) => {
      state.idleCodes.push(action.payload);
    },

    removeIdleCode: (state, action:PayloadAction<IdleCode>) => {
      const index = state.idleCodes.indexOf(action.payload);
      state.idleCodes.splice(index, 1);
    }
  }
});

export const { addIdleCode, removeIdleCode } = IdleCodesSlice.actions;
export default IdleCodesSlice.reducer;

//#endregion
