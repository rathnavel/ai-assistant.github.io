import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WellnessBreak } from "./types";

// Define the state interface
interface WellnessBreakState {
  wellnessBreakData: WellnessBreak[];
  loading: boolean;
}

// Initial state
const initialState: WellnessBreakState = {
  wellnessBreakData: [],
  loading: false
};

// Create the slice
export const WellnessBreakSlice = createSlice({
  name: "wellnessbreak",
  initialState,
  reducers: {
    // Action to remove wellness break data
    removeWellnessBreakData: (state: WellnessBreakState): void => {
      console.log("Removing wellness break data from store");
      state.wellnessBreakData = [];
      state.loading = false;
    },
    // Action to add wellness break data
    addWellnessBreakData: (state: WellnessBreakState, action: PayloadAction<WellnessBreak>): void => {
      console.log("Adding wellness break data to store", action.payload);
      state.wellnessBreakData.push(action.payload);
      state.loading = false;
    },
    // Action to update wellness break data
    updateWellnessBreakDataActionable: (state: WellnessBreakState, action: PayloadAction<WellnessBreak>): void => {
      console.log("Updating wellness break data in store", action.payload);
      const index = state.wellnessBreakData.findIndex((item) => item.interactionDateTime === action.payload.interactionDateTime);
      if (index !== -1) {
        state.wellnessBreakData[index] = {
          ...state.wellnessBreakData[index],
          content: {
            ...state.wellnessBreakData[index].content,
            actionable: action.payload.content.actionable,
            response: action.payload.content.response,
            agentEngaged: action.payload.content.agentEngaged,
            error: action.payload.content.error
          }
        };
      }
      state.loading = false;
    }
  }
});

// Export actions and reducer
export const { addWellnessBreakData, removeWellnessBreakData, updateWellnessBreakDataActionable } = WellnessBreakSlice.actions;
export default WellnessBreakSlice.reducer;

