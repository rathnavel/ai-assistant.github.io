import * as jspb from "google-protobuf";

import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb"; // proto import: "google/protobuf/struct.proto"
import * as recognize_pb from "./recognize_pb"; // proto import: "recognize.proto"

export class DtmfEvents extends jspb.Message {
  getDtmfEventsList(): Array<Dtmf>;
  setDtmfEventsList(value: Array<Dtmf>): DtmfEvents;
  clearDtmfEventsList(): DtmfEvents;
  addDtmfEvents(value: Dtmf, index?: number): DtmfEvents;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DtmfEvents.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DtmfEvents
  ): DtmfEvents.AsObject;
  static serializeBinaryToWriter(
    message: DtmfEvents,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DtmfEvents;
  static deserializeBinaryFromReader(
    message: DtmfEvents,
    reader: jspb.BinaryReader
  ): DtmfEvents;
}

export namespace DtmfEvents {
  export type AsObject = {
    dtmfEventsList: Array<Dtmf>;
  };
}

export class InputEvent extends jspb.Message {
  getEventType(): InputEvent.EventType;
  setEventType(value: InputEvent.EventType): InputEvent;

  getName(): string;
  setName(value: string): InputEvent;

  getParameters(): google_protobuf_struct_pb.Struct | undefined;
  setParameters(value?: google_protobuf_struct_pb.Struct): InputEvent;
  hasParameters(): boolean;
  clearParameters(): InputEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputEvent.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: InputEvent
  ): InputEvent.AsObject;
  static serializeBinaryToWriter(
    message: InputEvent,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): InputEvent;
  static deserializeBinaryFromReader(
    message: InputEvent,
    reader: jspb.BinaryReader
  ): InputEvent;
}

export namespace InputEvent {
  export type AsObject = {
    eventType: InputEvent.EventType;
    name: string;
    parameters?: google_protobuf_struct_pb.Struct.AsObject;
  };

  export enum EventType {
    UNSPECIFIED = 0,
    CALL_START = 1,
    CALL_END = 2,
    CUSTOM = 3,
    NO_INPUT = 4,
    START_OF_DTMF = 5,
  }
}

export class VirtualAgentResult extends jspb.Message {
  getPromptsList(): Array<Prompt>;
  setPromptsList(value: Array<Prompt>): VirtualAgentResult;
  clearPromptsList(): VirtualAgentResult;
  addPrompts(value?: Prompt, index?: number): Prompt;

  getResponsePayload(): string;
  setResponsePayload(value: string): VirtualAgentResult;

  getNlu(): NLU | undefined;
  setNlu(value?: NLU): VirtualAgentResult;
  hasNlu(): boolean;
  clearNlu(): VirtualAgentResult;

  getInputMode(): InputMode;
  setInputMode(value: InputMode): VirtualAgentResult;

  getIsSecure(): boolean;
  setIsSecure(value: boolean): VirtualAgentResult;

  getExecuteRequest(): ExecuteRequest | undefined;
  setExecuteRequest(value?: ExecuteRequest): VirtualAgentResult;
  hasExecuteRequest(): boolean;
  clearExecuteRequest(): VirtualAgentResult;

  getResponseType(): VirtualAgentResult.ResponseType;
  setResponseType(value: VirtualAgentResult.ResponseType): VirtualAgentResult;

  getInputConfigInfer(): InputConfigInfer | undefined;
  setInputConfigInfer(value?: InputConfigInfer): VirtualAgentResult;
  hasInputConfigInfer(): boolean;
  clearInputConfigInfer(): VirtualAgentResult;

  getNoInputTimeoutMs(): number;
  setNoInputTimeoutMs(value: number): VirtualAgentResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualAgentResult.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: VirtualAgentResult
  ): VirtualAgentResult.AsObject;
  static serializeBinaryToWriter(
    message: VirtualAgentResult,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): VirtualAgentResult;
  static deserializeBinaryFromReader(
    message: VirtualAgentResult,
    reader: jspb.BinaryReader
  ): VirtualAgentResult;
}

export namespace VirtualAgentResult {
  export type AsObject = {
    promptsList: Array<Prompt.AsObject>;
    responsePayload: string;
    nlu?: NLU.AsObject;
    inputMode: InputMode;
    isSecure: boolean;
    executeRequest?: ExecuteRequest.AsObject;
    responseType: VirtualAgentResult.ResponseType;
    inputConfigInfer?: InputConfigInfer.AsObject;
    noInputTimeoutMs: number;
  };

  export enum ResponseType {
    RESPONSE_FINAL = 0,
    RESPONSE_PARTIAL = 1,
  }
}

export class InputConfigInfer extends jspb.Message {
  getDtmfConfig(): recognize_pb.DTMFConfig | undefined;
  setDtmfConfig(value?: recognize_pb.DTMFConfig): InputConfigInfer;
  hasDtmfConfig(): boolean;
  clearDtmfConfig(): InputConfigInfer;

  getSpeechTimers(): recognize_pb.SpeechTimers | undefined;
  setSpeechTimers(value?: recognize_pb.SpeechTimers): InputConfigInfer;
  hasSpeechTimers(): boolean;
  clearSpeechTimers(): InputConfigInfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputConfigInfer.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: InputConfigInfer
  ): InputConfigInfer.AsObject;
  static serializeBinaryToWriter(
    message: InputConfigInfer,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): InputConfigInfer;
  static deserializeBinaryFromReader(
    message: InputConfigInfer,
    reader: jspb.BinaryReader
  ): InputConfigInfer;
}

export namespace InputConfigInfer {
  export type AsObject = {
    dtmfConfig?: recognize_pb.DTMFConfig.AsObject;
    speechTimers?: recognize_pb.SpeechTimers.AsObject;
  };
}

export class ExitEvent extends jspb.Message {
  getEventType(): ExitEvent.EventType;
  setEventType(value: ExitEvent.EventType): ExitEvent;

  getName(): string;
  setName(value: string): ExitEvent;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): ExitEvent;
  hasMetadata(): boolean;
  clearMetadata(): ExitEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExitEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ExitEvent): ExitEvent.AsObject;
  static serializeBinaryToWriter(
    message: ExitEvent,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ExitEvent;
  static deserializeBinaryFromReader(
    message: ExitEvent,
    reader: jspb.BinaryReader
  ): ExitEvent;
}

export namespace ExitEvent {
  export type AsObject = {
    eventType: ExitEvent.EventType;
    name: string;
    metadata?: google_protobuf_struct_pb.Struct.AsObject;
  };

  export enum EventType {
    UNSPECIFIED = 0,
    VA_CALL_END = 1,
    AGENT_TRANSFER = 2,
    CUSTOM = 3,
  }
}

export class NLU extends jspb.Message {
  getReplyTextList(): Array<string>;
  setReplyTextList(value: Array<string>): NLU;
  clearReplyTextList(): NLU;
  addReplyText(value: string, index?: number): NLU;

  getIntent(): Intent | undefined;
  setIntent(value?: Intent): NLU;
  hasIntent(): boolean;
  clearIntent(): NLU;

  getAgentTransfer(): AgentTransfer | undefined;
  setAgentTransfer(value?: AgentTransfer): NLU;
  hasAgentTransfer(): boolean;
  clearAgentTransfer(): NLU;

  getEndVirtualAgent(): EndVirtualAgent | undefined;
  setEndVirtualAgent(value?: EndVirtualAgent): NLU;
  hasEndVirtualAgent(): boolean;
  clearEndVirtualAgent(): NLU;

  getInputText(): string;
  setInputText(value: string): NLU;

  getExitEvent(): ExitEvent | undefined;
  setExitEvent(value?: ExitEvent): NLU;
  hasExitEvent(): boolean;
  clearExitEvent(): NLU;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NLU.AsObject;
  static toObject(includeInstance: boolean, msg: NLU): NLU.AsObject;
  static serializeBinaryToWriter(message: NLU, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NLU;
  static deserializeBinaryFromReader(
    message: NLU,
    reader: jspb.BinaryReader
  ): NLU;
}

export namespace NLU {
  export type AsObject = {
    replyTextList: Array<string>;
    intent?: Intent.AsObject;
    agentTransfer?: AgentTransfer.AsObject;
    endVirtualAgent?: EndVirtualAgent.AsObject;
    inputText: string;
    exitEvent?: ExitEvent.AsObject;
  };
}

export class CallInsightsResult extends jspb.Message {
  getContent(): string;
  setContent(value: string): CallInsightsResult;

  getCallinsighttype(): CallInsightType;
  setCallinsighttype(value: CallInsightType): CallInsightsResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallInsightsResult.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CallInsightsResult
  ): CallInsightsResult.AsObject;
  static serializeBinaryToWriter(
    message: CallInsightsResult,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CallInsightsResult;
  static deserializeBinaryFromReader(
    message: CallInsightsResult,
    reader: jspb.BinaryReader
  ): CallInsightsResult;
}

export namespace CallInsightsResult {
  export type AsObject = {
    content: string;
    callinsighttype: CallInsightType;
  };
}

export class Intent extends jspb.Message {
  getName(): string;
  setName(value: string): Intent;

  getDisplayName(): string;
  setDisplayName(value: string): Intent;

  getParameters(): google_protobuf_struct_pb.Struct | undefined;
  setParameters(value?: google_protobuf_struct_pb.Struct): Intent;
  hasParameters(): boolean;
  clearParameters(): Intent;

  getMatchConfidence(): number;
  setMatchConfidence(value: number): Intent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Intent.AsObject;
  static toObject(includeInstance: boolean, msg: Intent): Intent.AsObject;
  static serializeBinaryToWriter(
    message: Intent,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Intent;
  static deserializeBinaryFromReader(
    message: Intent,
    reader: jspb.BinaryReader
  ): Intent;
}

export namespace Intent {
  export type AsObject = {
    name: string;
    displayName: string;
    parameters?: google_protobuf_struct_pb.Struct.AsObject;
    matchConfidence: number;
  };
}

export class AgentTransfer extends jspb.Message {
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): AgentTransfer;
  hasMetadata(): boolean;
  clearMetadata(): AgentTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentTransfer.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AgentTransfer
  ): AgentTransfer.AsObject;
  static serializeBinaryToWriter(
    message: AgentTransfer,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AgentTransfer;
  static deserializeBinaryFromReader(
    message: AgentTransfer,
    reader: jspb.BinaryReader
  ): AgentTransfer;
}

export namespace AgentTransfer {
  export type AsObject = {
    metadata?: google_protobuf_struct_pb.Struct.AsObject;
  };
}

export class EndVirtualAgent extends jspb.Message {
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): EndVirtualAgent;
  hasMetadata(): boolean;
  clearMetadata(): EndVirtualAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndVirtualAgent.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: EndVirtualAgent
  ): EndVirtualAgent.AsObject;
  static serializeBinaryToWriter(
    message: EndVirtualAgent,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): EndVirtualAgent;
  static deserializeBinaryFromReader(
    message: EndVirtualAgent,
    reader: jspb.BinaryReader
  ): EndVirtualAgent;
}

export namespace EndVirtualAgent {
  export type AsObject = {
    metadata?: google_protobuf_struct_pb.Struct.AsObject;
  };
}

export class Prompt extends jspb.Message {
  getText(): string;
  setText(value: string): Prompt;

  getAudioUri(): string;
  setAudioUri(value: string): Prompt;

  getAudioContent(): Uint8Array | string;
  getAudioContent_asU8(): Uint8Array;
  getAudioContent_asB64(): string;
  setAudioContent(value: Uint8Array | string): Prompt;

  getBargein(): boolean;
  setBargein(value: boolean): Prompt;

  getFinal(): boolean;
  setFinal(value: boolean): Prompt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prompt.AsObject;
  static toObject(includeInstance: boolean, msg: Prompt): Prompt.AsObject;
  static serializeBinaryToWriter(
    message: Prompt,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Prompt;
  static deserializeBinaryFromReader(
    message: Prompt,
    reader: jspb.BinaryReader
  ): Prompt;
}

export namespace Prompt {
  export type AsObject = {
    text: string;
    audioUri: string;
    audioContent: Uint8Array | string;
    bargein: boolean;
    pb_final: boolean;
  };
}

export class ExecuteRequest extends jspb.Message {
  getEventName(): string;
  setEventName(value: string): ExecuteRequest;

  getEventData(): string;
  setEventData(value: string): ExecuteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ExecuteRequest
  ): ExecuteRequest.AsObject;
  static serializeBinaryToWriter(
    message: ExecuteRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRequest;
  static deserializeBinaryFromReader(
    message: ExecuteRequest,
    reader: jspb.BinaryReader
  ): ExecuteRequest;
}

export namespace ExecuteRequest {
  export type AsObject = {
    eventName: string;
    eventData: string;
  };
}

export class VirtualAgent extends jspb.Message {
  getVirtualagentid(): string;
  setVirtualagentid(value: string): VirtualAgent;

  getVirtualagentname(): string;
  setVirtualagentname(value: string): VirtualAgent;

  getIsdefault(): boolean;
  setIsdefault(value: boolean): VirtualAgent;

  getAdditionalattributesMap(): jspb.Map<string, string>;
  clearAdditionalattributesMap(): VirtualAgent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VirtualAgent.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: VirtualAgent
  ): VirtualAgent.AsObject;
  static serializeBinaryToWriter(
    message: VirtualAgent,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): VirtualAgent;
  static deserializeBinaryFromReader(
    message: VirtualAgent,
    reader: jspb.BinaryReader
  ): VirtualAgent;
}

export namespace VirtualAgent {
  export type AsObject = {
    virtualagentid: string;
    virtualagentname: string;
    isdefault: boolean;
    additionalattributesMap: Array<[string, string]>;
  };
}

export enum Dtmf {
  TELEPHONY_DTMF_UNSPECIFIED = 0,
  DTMF_ONE = 1,
  DTMF_TWO = 2,
  DTMF_THREE = 3,
  DTMF_FOUR = 4,
  DTMF_FIVE = 5,
  DTMF_SIX = 6,
  DTMF_SEVEN = 7,
  DTMF_EIGHT = 8,
  DTMF_NINE = 9,
  DTMF_ZERO = 10,
  DTMF_A = 11,
  DTMF_B = 12,
  DTMF_C = 13,
  DTMF_D = 14,
  DTMF_STAR = 15,
  DTMF_POUND = 16,
}
export enum InputMode {
  INPUT_MODE_UNSPECIFIED = 0,
  INPUT_VOICE = 1,
  INPUT_DTMF = 2,
  INPUT_VOICE_DTMF = 3,
}
export enum CallInsightType {
  UNSPECIFIED = 0,
  VA_CALL_SUMMARY = 1,
}
