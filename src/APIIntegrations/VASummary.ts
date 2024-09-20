// Action creator

import { fetchGrpcData } from "../gRPCClient/index";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { VASResponse, VASummary } from "./types";

export const GRPC_DATA_SUCCESS = "GRPC_DATA_SUCCESS";
export const GRPC_DATA_ERROR = "GRPC_DATA_ERROR";

export const grpcDataSuccess = (data: any) => ({
  type: GRPC_DATA_SUCCESS,
  payload: data
});

export const grpcDataError = (error: any) => ({
  type: GRPC_DATA_ERROR,
  payload: error
});

async function fetchData(host: string, authToken: string, interactionId: string, orgId: string): Promise<VASResponse> {
  try {
    // ...fetch data and process it...
    const data = await fetchGrpcData(host, authToken, interactionId, orgId);
    // If everything is successful, return the data
    return data;
  } catch (error: any) {
    return { error: error.message, summary: null, interactionDateTime: "" };
  }
}
// Define a thunk for fetching the data
export const fetchVASData = createAsyncThunk<
  VASResponse, // Return type of the payload creator
  { host: string; authToken: string; interactionId: string; orgId: string },
  { rejectValue: string }
>("vas/fetchData", async ({ host, authToken, interactionId, orgId }, { dispatch, rejectWithValue }) => {
  try {
    console.log("Fetching data", host, authToken, interactionId, orgId);
    // fetchGrpcData returns a Promise of VASResponse
    const res = await fetchData(host, authToken, interactionId, orgId);
    console.log("Response from fetchdata", res);
    return res;
  } catch (error: any) {
    console.error("Failed to fetch data", error);
    // return error message as the payload
    return rejectWithValue(error.message);
  }
});

interface VASState {
  grpcData: VASResponse | null;
  grpcError: string | null;
}
// Define the initial state
const initialState: VASState = {
  grpcData: null,
  grpcError: null
};

interface YourApiState {
  data: VASummary | null;
  loading: boolean;
  error: string | null;
}
// Create a slice with reducers to handle the actions
const vasSlice = createSlice({
  name: "vas",
  initialState,
  reducers: {
    // Define reducers if needed
    removeVASData: (state) => {
      state.grpcData = null;
      state.grpcError = null;
    }
    // You could define additional reducers if necessary
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVASData.fulfilled, (state, action: PayloadAction<VASResponse>) => {
        state.grpcData = action.payload;
        state.grpcError = null;
      })
      .addCase(fetchVASData.rejected, (state, action) => {
        state.grpcData = null;
        state.grpcError = action.payload as string; // Assuming the payload is a string error message
      });
  }
});

export const { removeVASData } = vasSlice.actions;
export default vasSlice.reducer;

