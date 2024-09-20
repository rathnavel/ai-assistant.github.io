import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/**
 * - PRODUS1
 *   - apibaseEndpoint: "https://api.wxcc-us1.cisco.com/"
 *   - SPLIT_KEY_TOKEN: "m4m7dr8os19fsk0mr62pv2k7751svei2agf"
 *
 * - QAUS1
 *   - apibaseEndpoint: "https://api.qaus1.ciscoccservice.com/"
 *   - servingUrl: 'https://serving-api-streaming.qaus1.ciscoccservice.com:443'
 *   - SPLIT_KEY_TOKEN: "dlcgif529hh763abhh1f9bkrbn9v30mjafnk"
 *
 * - INTGUS1
 *   - apibaseEndpoint: ""
 *   - servingUrl: ""
 *   - SPLIT_KEY_TOKEN: ""
 *
 * - localhost
 *   - apibaseEndpoint: "http://localhost:8080/"
 */

interface Constants {
  apibaseEndpoint: string;
  servingUrl: string;
  SPLIT_KEY_TOKEN: string;
}

const constants: Constants = {
  apibaseEndpoint: "",
  servingUrl: "",
  SPLIT_KEY_TOKEN: ""
};

const initialState: Constants = { ...constants };

const constantsSlice = createSlice({
  name: "constants",
  initialState,
  reducers: {
    setAPIBaseEndpoint: (state, action: PayloadAction<string>): void => {
      state.apibaseEndpoint = action.payload;
    },
    setSplitKeyToken: (state, action: PayloadAction<string>): void => {
      state.SPLIT_KEY_TOKEN = action.payload;
    },
    setServingUrl: (state, action: PayloadAction<string>): void => {
      state.servingUrl = action.payload;
    }
  }
});

export const { setAPIBaseEndpoint, setSplitKeyToken, setServingUrl } = constantsSlice.actions;
export default constantsSlice.reducer;
