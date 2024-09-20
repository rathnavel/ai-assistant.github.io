import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CDSResponse, ApiError } from "./types";
import axios from "axios";

export const fetchCDSData = createAsyncThunk<
  CDSResponse,
  {
    apiBaseEndpoint: string;
    orgId: string;
    aniId: string;
    accessToken: string;
  },
  { rejectValue: ApiError }
>(
  "cdsapi/fetchData",
  async (
    { apiBaseEndpoint, orgId, aniId, accessToken },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(
        `${apiBaseEndpoint}cds-api/summary?orgId=${orgId}&aniId=${aniId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Response from CDS API", response.data);

      let timeStamp = response.data.interactionDateTime;
      let summaryResponse = JSON.parse(response.data.summary);
      let res: CDSResponse = {
        summary: summaryResponse,
        interactionDateTime: timeStamp,
      };
      return res;
    } catch (error) {
      console.error("Failed to fetch data", error);
      return rejectWithValue({
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
);

//#region  Slice

interface YourApiState {
  cdsData: CDSResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: YourApiState = {
  cdsData: null,
  loading: false,
  error: null,
};

export const CDSAPISlice = createSlice({
  name: "cdsapi",
  initialState,
  reducers: {
    // Define reducers if needed
    removeCDSData: (state) => {
      state.cdsData = null;
      state.loading = false;
      state.error = null;
    },
    addCDSData: (state, action: PayloadAction<CDSResponse>) => {
      console.log("Adding CDS Data", action.payload);
      state.cdsData = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCDSData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCDSData.fulfilled, (state, action) => {
      state.cdsData = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCDSData.rejected, (state, action) => {
      state.error = action.payload?.message ?? "Failed to fetch data";
      state.loading = false;
    });
  },
});

export const { addCDSData, removeCDSData } = CDSAPISlice.actions;
export default CDSAPISlice.reducer;
//#endregion
