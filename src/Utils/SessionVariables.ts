import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SessionVariablesState {
  orgId: string;
  aniId: string;
  interactionId: string;
  accessToken: string;
  requestSummary: boolean;
  isCDSEnabled: boolean;
  isVAHEnabled: boolean;
  agentId: string;
  agentSessionId: string;
  eventHandlerUrl: string;
  isWellnessBreakCTAAvailable: boolean;
}

const sessionVariables: SessionVariablesState = {
  orgId: "",
  aniId: "",
  interactionId: "",
  accessToken: "",
  requestSummary: false,
  isCDSEnabled: false,
  isVAHEnabled: false,
  agentId: "",
  agentSessionId: "",
  eventHandlerUrl: "",
  isWellnessBreakCTAAvailable: false
};

const initialState: SessionVariablesState = sessionVariables;

export const sessionVariablesSlice = createSlice({
  name: "sessionVariables",
  initialState,
  reducers: {
    setOrgId: (state, action: PayloadAction<string>): void => {
      state.orgId = action.payload;
    },
    setANIId: (state, action: PayloadAction<string>): void => {
      state.aniId = action.payload;
    },
    setInteractionId: (state, action: PayloadAction<string>): void => {
      state.interactionId = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>): void => {
      state.accessToken = action.payload;
    },
    setIsCDSEnabled: (state, action: PayloadAction<boolean>): void => {
      state.isCDSEnabled = action.payload;
    },
    setIsVAHEnabled: (state, action: PayloadAction<boolean>): void => {
      state.isVAHEnabled = action.payload;
    },
    setAgentId: (state, action: PayloadAction<string>): void => {
      state.agentId = action.payload;
    },
    setAgentSessionId: (state, action: PayloadAction<string>): void => {
      state.agentSessionId = action.payload;
    },
    setEventHandlerUrl: (state, action: PayloadAction<string>): void => {
      state.eventHandlerUrl = action.payload;
    },
    setIsWellnessBreakCTAAvailable: (state, action: PayloadAction<boolean>): void => {
      state.isWellnessBreakCTAAvailable = action.payload;
    }
  }
});

export const { setOrgId, setANIId, setInteractionId, setAccessToken, setIsCDSEnabled, setIsVAHEnabled, setAgentId, setAgentSessionId, setEventHandlerUrl, setIsWellnessBreakCTAAvailable } = sessionVariablesSlice.actions;
export default sessionVariablesSlice.reducer;
