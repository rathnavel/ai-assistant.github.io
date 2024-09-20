import * as jspb from "google-protobuf";

import * as messages_pb from "./messages_pb"; // proto import: "messages.proto"
import * as suggestions_pb from "./suggestions_pb"; // proto import: "suggestions.proto"
import * as recognize_pb from "./recognize_pb"; // proto import: "recognize.proto"
import * as virtualagent_pb from "./virtualagent_pb"; // proto import: "virtualagent.proto"

export class StreamingInsightServingRequest extends jspb.Message {
  getInsightservingrequest(): InsightServingRequest | undefined;
  setInsightservingrequest(
    value?: InsightServingRequest
  ): StreamingInsightServingRequest;
  hasInsightservingrequest(): boolean;
  clearInsightservingrequest(): StreamingInsightServingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingInsightServingRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StreamingInsightServingRequest
  ): StreamingInsightServingRequest.AsObject;
  static serializeBinaryToWriter(
    message: StreamingInsightServingRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StreamingInsightServingRequest;
  static deserializeBinaryFromReader(
    message: StreamingInsightServingRequest,
    reader: jspb.BinaryReader
  ): StreamingInsightServingRequest;
}

export namespace StreamingInsightServingRequest {
  export type AsObject = {
    insightservingrequest?: InsightServingRequest.AsObject;
  };
}

export class InsightServingRequest extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): InsightServingRequest;

  getOrgid(): string;
  setOrgid(value: string): InsightServingRequest;

  getRealtimetranscripts(): boolean;
  setRealtimetranscripts(value: boolean): InsightServingRequest;

  getHistoricaltranscripts(): boolean;
  setHistoricaltranscripts(value: boolean): InsightServingRequest;

  getRealtimeagentassist(): boolean;
  setRealtimeagentassist(value: boolean): InsightServingRequest;

  getHistoricalagentassist(): boolean;
  setHistoricalagentassist(value: boolean): InsightServingRequest;

  getRealtimemessage(): boolean;
  setRealtimemessage(value: boolean): InsightServingRequest;

  getHistoricalmessage(): boolean;
  setHistoricalmessage(value: boolean): InsightServingRequest;

  getHistoricalvirtualagent(): boolean;
  setHistoricalvirtualagent(value: boolean): InsightServingRequest;

  getAgentdetails(): AgentDetails | undefined;
  setAgentdetails(value?: AgentDetails): InsightServingRequest;
  hasAgentdetails(): boolean;
  clearAgentdetails(): InsightServingRequest;

  getMessageid(): string;
  setMessageid(value: string): InsightServingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsightServingRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: InsightServingRequest
  ): InsightServingRequest.AsObject;
  static serializeBinaryToWriter(
    message: InsightServingRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): InsightServingRequest;
  static deserializeBinaryFromReader(
    message: InsightServingRequest,
    reader: jspb.BinaryReader
  ): InsightServingRequest;
}

export namespace InsightServingRequest {
  export type AsObject = {
    conversationid: string;
    orgid: string;
    realtimetranscripts: boolean;
    historicaltranscripts: boolean;
    realtimeagentassist: boolean;
    historicalagentassist: boolean;
    realtimemessage: boolean;
    historicalmessage: boolean;
    historicalvirtualagent: boolean;
    agentdetails?: AgentDetails.AsObject;
    messageid: string;
  };
}

export class InsightsServingRequest extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): InsightsServingRequest;

  getMessageid(): string;
  setMessageid(value: string): InsightsServingRequest;

  getOrgid(): string;
  setOrgid(value: string): InsightsServingRequest;

  getInsighttype(): InsightsServingRequest.InsightType;
  setInsighttype(
    value: InsightsServingRequest.InsightType
  ): InsightsServingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsightsServingRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: InsightsServingRequest
  ): InsightsServingRequest.AsObject;
  static serializeBinaryToWriter(
    message: InsightsServingRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): InsightsServingRequest;
  static deserializeBinaryFromReader(
    message: InsightsServingRequest,
    reader: jspb.BinaryReader
  ): InsightsServingRequest;
}

export namespace InsightsServingRequest {
  export type AsObject = {
    conversationid: string;
    messageid: string;
    orgid: string;
    insighttype: InsightsServingRequest.InsightType;
  };

  export enum InsightType {
    DEFAULT_TRANSCRIPTION = 0,
    AGENT_ANSWERS = 1,
    TRANSCRIPTION = 2,
    VIRTUAL_AGENT = 3,
    MESSAGE = 4,
    CALL_INSIGHTS = 5,
  }
}

export class InsightsServingResponse extends jspb.Message {
  getConversationid(): string;
  setConversationid(value: string): InsightsServingResponse;

  getMessageid(): string;
  setMessageid(value: string): InsightsServingResponse;

  getOrgid(): string;
  setOrgid(value: string): InsightsServingResponse;

  getStarttimestamp(): number;
  setStarttimestamp(value: number): InsightsServingResponse;

  getEndtimestamp(): number;
  setEndtimestamp(value: number): InsightsServingResponse;

  getConfigid(): string;
  setConfigid(value: string): InsightsServingResponse;

  getLanguagecode(): string;
  setLanguagecode(value: string): InsightsServingResponse;

  getInsightprovider(): InsightsServingResponse.ServiceProvider;
  setInsightprovider(
    value: InsightsServingResponse.ServiceProvider
  ): InsightsServingResponse;

  getResponsecontentList(): Array<ResponseContent>;
  setResponsecontentList(
    value: Array<ResponseContent>
  ): InsightsServingResponse;
  clearResponsecontentList(): InsightsServingResponse;
  addResponsecontent(value?: ResponseContent, index?: number): ResponseContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsightsServingResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: InsightsServingResponse
  ): InsightsServingResponse.AsObject;
  static serializeBinaryToWriter(
    message: InsightsServingResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): InsightsServingResponse;
  static deserializeBinaryFromReader(
    message: InsightsServingResponse,
    reader: jspb.BinaryReader
  ): InsightsServingResponse;
}

export namespace InsightsServingResponse {
  export type AsObject = {
    conversationid: string;
    messageid: string;
    orgid: string;
    starttimestamp: number;
    endtimestamp: number;
    configid: string;
    languagecode: string;
    insightprovider: InsightsServingResponse.ServiceProvider;
    responsecontentList: Array<ResponseContent.AsObject>;
  };

  export enum ServiceProvider {
    DEFAULT = 0,
    CISCO = 1,
    GOOGLE = 2,
    NUANCE = 3,
  }
}

export class StreamingInsightServingResponse extends jspb.Message {
  getInsightservingresponse(): InsightServingResponse | undefined;
  setInsightservingresponse(
    value?: InsightServingResponse
  ): StreamingInsightServingResponse;
  hasInsightservingresponse(): boolean;
  clearInsightservingresponse(): StreamingInsightServingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingInsightServingResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StreamingInsightServingResponse
  ): StreamingInsightServingResponse.AsObject;
  static serializeBinaryToWriter(
    message: StreamingInsightServingResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StreamingInsightServingResponse;
  static deserializeBinaryFromReader(
    message: StreamingInsightServingResponse,
    reader: jspb.BinaryReader
  ): StreamingInsightServingResponse;
}

export namespace StreamingInsightServingResponse {
  export type AsObject = {
    insightservingresponse?: InsightServingResponse.AsObject;
  };
}

export class AgentDetails extends jspb.Message {
  getAgentid(): string;
  setAgentid(value: string): AgentDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentDetails.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AgentDetails
  ): AgentDetails.AsObject;
  static serializeBinaryToWriter(
    message: AgentDetails,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AgentDetails;
  static deserializeBinaryFromReader(
    message: AgentDetails,
    reader: jspb.BinaryReader
  ): AgentDetails;
}

export namespace AgentDetails {
  export type AsObject = {
    agentid: string;
  };
}

export class InsightServingResponse extends jspb.Message {
  getOrgid(): string;
  setOrgid(value: string): InsightServingResponse;

  getConversationid(): string;
  setConversationid(value: string): InsightServingResponse;

  getRoleid(): string;
  setRoleid(value: string): InsightServingResponse;

  getUtteranceid(): string;
  setUtteranceid(value: string): InsightServingResponse;

  getRole(): InsightServingResponse.Role;
  setRole(value: InsightServingResponse.Role): InsightServingResponse;

  getInsighttype(): InsightServingResponse.ServiceType;
  setInsighttype(
    value: InsightServingResponse.ServiceType
  ): InsightServingResponse;

  getInsightprovider(): InsightServingResponse.ServiceProvider;
  setInsightprovider(
    value: InsightServingResponse.ServiceProvider
  ): InsightServingResponse;

  getPublishtimestamp(): number;
  setPublishtimestamp(value: number): InsightServingResponse;

  getStarttimestamp(): number;
  setStarttimestamp(value: number): InsightServingResponse;

  getEndtimestamp(): number;
  setEndtimestamp(value: number): InsightServingResponse;

  getIsfinal(): boolean;
  setIsfinal(value: boolean): InsightServingResponse;

  getMessageid(): string;
  setMessageid(value: string): InsightServingResponse;

  getConfigid(): string;
  setConfigid(value: string): InsightServingResponse;

  getLanguagecode(): string;
  setLanguagecode(value: string): InsightServingResponse;

  getResponsecontent(): ResponseContent | undefined;
  setResponsecontent(value?: ResponseContent): InsightServingResponse;
  hasResponsecontent(): boolean;
  clearResponsecontent(): InsightServingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsightServingResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: InsightServingResponse
  ): InsightServingResponse.AsObject;
  static serializeBinaryToWriter(
    message: InsightServingResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): InsightServingResponse;
  static deserializeBinaryFromReader(
    message: InsightServingResponse,
    reader: jspb.BinaryReader
  ): InsightServingResponse;
}

export namespace InsightServingResponse {
  export type AsObject = {
    orgid: string;
    conversationid: string;
    roleid: string;
    utteranceid: string;
    role: InsightServingResponse.Role;
    insighttype: InsightServingResponse.ServiceType;
    insightprovider: InsightServingResponse.ServiceProvider;
    publishtimestamp: number;
    starttimestamp: number;
    endtimestamp: number;
    isfinal: boolean;
    messageid: string;
    configid: string;
    languagecode: string;
    responsecontent?: ResponseContent.AsObject;
  };

  export enum Role {
    IVR = 0,
    CALLER = 1,
    AGENT = 2,
  }

  export enum ServiceType {
    DEFAULT_TRANSCRIPTION = 0,
    AGENT_ANSWERS = 1,
    TRANSCRIPTION = 2,
    VIRTUAL_AGENT = 3,
    MESSAGE = 4,
    CALL_INSIGHTS = 5,
  }

  export enum ServiceProvider {
    DEFAULT = 0,
    CISCO = 1,
    GOOGLE = 2,
    NUANCE = 3,
  }
}

export class ResponseContent extends jspb.Message {
  getRawcontent(): string;
  setRawcontent(value: string): ResponseContent;

  getRecognitionresult(): recognize_pb.StreamingRecognitionResult | undefined;
  setRecognitionresult(
    value?: recognize_pb.StreamingRecognitionResult
  ): ResponseContent;
  hasRecognitionresult(): boolean;
  clearRecognitionresult(): ResponseContent;

  getAgentanswerresult(): suggestions_pb.AgentAnswer | undefined;
  setAgentanswerresult(value?: suggestions_pb.AgentAnswer): ResponseContent;
  hasAgentanswerresult(): boolean;
  clearAgentanswerresult(): ResponseContent;

  getMessageresult(): messages_pb.Message | undefined;
  setMessageresult(value?: messages_pb.Message): ResponseContent;
  hasMessageresult(): boolean;
  clearMessageresult(): ResponseContent;

  getVirtualagentresult(): virtualagent_pb.NLU | undefined;
  setVirtualagentresult(value?: virtualagent_pb.NLU): ResponseContent;
  hasVirtualagentresult(): boolean;
  clearVirtualagentresult(): ResponseContent;

  getCallinsightsresult(): virtualagent_pb.CallInsightsResult | undefined;
  setCallinsightsresult(
    value?: virtualagent_pb.CallInsightsResult
  ): ResponseContent;
  hasCallinsightsresult(): boolean;
  clearCallinsightsresult(): ResponseContent;

  getStreamResponseContentCase(): ResponseContent.StreamResponseContentCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseContent.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ResponseContent
  ): ResponseContent.AsObject;
  static serializeBinaryToWriter(
    message: ResponseContent,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ResponseContent;
  static deserializeBinaryFromReader(
    message: ResponseContent,
    reader: jspb.BinaryReader
  ): ResponseContent;
}

export namespace ResponseContent {
  export type AsObject = {
    rawcontent: string;
    recognitionresult?: recognize_pb.StreamingRecognitionResult.AsObject;
    agentanswerresult?: suggestions_pb.AgentAnswer.AsObject;
    messageresult?: messages_pb.Message.AsObject;
    virtualagentresult?: virtualagent_pb.NLU.AsObject;
    callinsightsresult?: virtualagent_pb.CallInsightsResult.AsObject;
  };

  export enum StreamResponseContentCase {
    STREAM_RESPONSE_CONTENT_NOT_SET = 0,
    RAWCONTENT = 1,
    RECOGNITIONRESULT = 2,
    AGENTANSWERRESULT = 3,
    MESSAGERESULT = 4,
    VIRTUALAGENTRESULT = 5,
    CALLINSIGHTSRESULT = 6,
  }
}
