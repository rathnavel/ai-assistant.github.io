import { WellnessBreakError, WellnessBreakResponse } from "../Utils/WellnessBreakTypes";

export interface CDSResponse {
  summary: CDSSummary;
  interactionDateTime: string;
}
export interface CDSSummary {
  context: string;
  reason: string;
  last_action: string;
}

export interface ApiError {
  message: string;
}

export interface VASResponse {
  summary: VASummary | null;
  interactionDateTime: string;
  error: string | null;
}
export interface VASummary {
  hand_off_reason: string;
  details: string;
  call_reason: string;
}

export interface DemoSummary {
  widgetType: string;
  summary: CDSSummary | VASummary;
}

export interface WellnessBreak {
  content: WellnessBreakContent;
  interactionDateTime: string;
}

export interface WellnessBreakContent {
  question: string;
  header: string;
  widgetType: string;
  actionable: boolean;
  response: WellnessBreakResponse;
  agentEngaged: boolean | null;
  error: WellnessBreakError | null;
}

export interface IdleCode {
  state: "Available" | "Idle";
  codeName: string;
  codeId: string;
}

