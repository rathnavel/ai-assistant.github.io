// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
// Import your slice reducers here
import constantReducer from "../Utils/Constants";
import cdsReducer from "../APIIntegrations/CDSData";
import sessionVariablesReducer from "../Utils/SessionVariables";
import vasReducer from "../APIIntegrations/VASummary";
import wellnessBreakReducer from "../APIIntegrations/WellnessBreaks";
import idleCodesReducer from "../APIIntegrations/IdleCodes";

const rootReducer = combineReducers({
  // Add slice reducers here
  constants: constantReducer,
  cdsAPI: cdsReducer,
  sessionVariables: sessionVariablesReducer,
  VASummary: vasReducer,
  wellnessBreaks: wellnessBreakReducer,
  idleCodes: idleCodesReducer
  // Other reducers can be added here
});

export default rootReducer;

