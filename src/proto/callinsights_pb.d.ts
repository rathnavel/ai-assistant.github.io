import * as jspb from "google-protobuf";

import * as google_rpc_status_pb from "./google/rpc/status_pb"; // proto import: "google/rpc/status.proto"

export class ConversationMessage extends jspb.Message {
  getRole(): ConversationMessage.Role;
  setRole(value: ConversationMessage.Role): ConversationMessage;

  getStartTime(): number;
  setStartTime(value: number): ConversationMessage;

  getEndTime(): number;
  setEndTime(value: number): ConversationMessage;

  getLanguageCode(): string;
  setLanguageCode(value: string): ConversationMessage;

  getTranscript(): string;
  setTranscript(value: string): ConversationMessage;

  getInsightsMap(): jspb.Map<string, string>;
  clearInsightsMap(): ConversationMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationMessage.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ConversationMessage
  ): ConversationMessage.AsObject;
  static serializeBinaryToWriter(
    message: ConversationMessage,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ConversationMessage;
  static deserializeBinaryFromReader(
    message: ConversationMessage,
    reader: jspb.BinaryReader
  ): ConversationMessage;
}

export namespace ConversationMessage {
  export type AsObject = {
    role: ConversationMessage.Role;
    startTime: number;
    endTime: number;
    languageCode: string;
    transcript: string;
    insightsMap: Array<[string, string]>;
  };

  export enum Role {
    ROLE_UNSPECIFIED = 0,
    VIRTUAL_AGENT = 1,
    CALLER = 2,
    AGENT = 3,
  }
}

export class Conversation extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): Conversation;

  getStartTimestamp(): number;
  setStartTimestamp(value: number): Conversation;

  getEndTimestamp(): number;
  setEndTimestamp(value: number): Conversation;

  getLanguageCode(): string;
  setLanguageCode(value: string): Conversation;

  getMessagesList(): Array<ConversationMessage>;
  setMessagesList(value: Array<ConversationMessage>): Conversation;
  clearMessagesList(): Conversation;
  addMessages(value?: ConversationMessage, index?: number): ConversationMessage;

  getRedacted(): boolean;
  setRedacted(value: boolean): Conversation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Conversation.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: Conversation
  ): Conversation.AsObject;
  static serializeBinaryToWriter(
    message: Conversation,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Conversation;
  static deserializeBinaryFromReader(
    message: Conversation,
    reader: jspb.BinaryReader
  ): Conversation;
}

export namespace Conversation {
  export type AsObject = {
    conversationId: string;
    startTimestamp: number;
    endTimestamp: number;
    languageCode: string;
    messagesList: Array<ConversationMessage.AsObject>;
    redacted: boolean;
  };
}

export class GetInsightsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): GetInsightsRequest;

  getConversation(): Conversation | undefined;
  setConversation(value?: Conversation): GetInsightsRequest;
  hasConversation(): boolean;
  clearConversation(): GetInsightsRequest;

  getEventType(): EventType;
  setEventType(value: EventType): GetInsightsRequest;

  getInsightConfig(): InsightsConfig | undefined;
  setInsightConfig(value?: InsightsConfig): GetInsightsRequest;
  hasInsightConfig(): boolean;
  clearInsightConfig(): GetInsightsRequest;

  getCallContext(): string;
  setCallContext(value: string): GetInsightsRequest;

  getCallAttributesMap(): jspb.Map<string, string>;
  clearCallAttributesMap(): GetInsightsRequest;

  getRequestTimestamp(): number;
  setRequestTimestamp(value: number): GetInsightsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInsightsRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetInsightsRequest
  ): GetInsightsRequest.AsObject;
  static serializeBinaryToWriter(
    message: GetInsightsRequest,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetInsightsRequest;
  static deserializeBinaryFromReader(
    message: GetInsightsRequest,
    reader: jspb.BinaryReader
  ): GetInsightsRequest;
}

export namespace GetInsightsRequest {
  export type AsObject = {
    orgId: string;
    conversation?: Conversation.AsObject;
    eventType: EventType;
    insightConfig?: InsightsConfig.AsObject;
    callContext: string;
    callAttributesMap: Array<[string, string]>;
    requestTimestamp: number;
  };
}

export class InsightsConfig extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsightsConfig.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: InsightsConfig
  ): InsightsConfig.AsObject;
  static serializeBinaryToWriter(
    message: InsightsConfig,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): InsightsConfig;
  static deserializeBinaryFromReader(
    message: InsightsConfig,
    reader: jspb.BinaryReader
  ): InsightsConfig;
}

export namespace InsightsConfig {
  export type AsObject = {};

  export class CustomerSentimentConfig extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerSentimentConfig.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: CustomerSentimentConfig
    ): CustomerSentimentConfig.AsObject;
    static serializeBinaryToWriter(
      message: CustomerSentimentConfig,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): CustomerSentimentConfig;
    static deserializeBinaryFromReader(
      message: CustomerSentimentConfig,
      reader: jspb.BinaryReader
    ): CustomerSentimentConfig;
  }

  export namespace CustomerSentimentConfig {
    export type AsObject = {};
  }

  export class AgentSentimentConfig extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgentSentimentConfig.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: AgentSentimentConfig
    ): AgentSentimentConfig.AsObject;
    static serializeBinaryToWriter(
      message: AgentSentimentConfig,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): AgentSentimentConfig;
    static deserializeBinaryFromReader(
      message: AgentSentimentConfig,
      reader: jspb.BinaryReader
    ): AgentSentimentConfig;
  }

  export namespace AgentSentimentConfig {
    export type AsObject = {};
  }

  export class TopicConfig extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicConfig.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: TopicConfig
    ): TopicConfig.AsObject;
    static serializeBinaryToWriter(
      message: TopicConfig,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): TopicConfig;
    static deserializeBinaryFromReader(
      message: TopicConfig,
      reader: jspb.BinaryReader
    ): TopicConfig;
  }

  export namespace TopicConfig {
    export type AsObject = {};
  }

  export class SummaryConfig extends jspb.Message {
    getLength(): number;
    setLength(value: number): SummaryConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SummaryConfig.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: SummaryConfig
    ): SummaryConfig.AsObject;
    static serializeBinaryToWriter(
      message: SummaryConfig,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): SummaryConfig;
    static deserializeBinaryFromReader(
      message: SummaryConfig,
      reader: jspb.BinaryReader
    ): SummaryConfig;
  }

  export namespace SummaryConfig {
    export type AsObject = {
      length: number;
    };
  }
}

export class GetInsightsResponse extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): GetInsightsResponse;

  getConversationId(): string;
  setConversationId(value: string): GetInsightsResponse;

  getEventType(): EventType;
  setEventType(value: EventType): GetInsightsResponse;

  getCustomerSentiment(): Sentiment | undefined;
  setCustomerSentiment(value?: Sentiment): GetInsightsResponse;
  hasCustomerSentiment(): boolean;
  clearCustomerSentiment(): GetInsightsResponse;

  getAgentSentiment(): Sentiment | undefined;
  setAgentSentiment(value?: Sentiment): GetInsightsResponse;
  hasAgentSentiment(): boolean;
  clearAgentSentiment(): GetInsightsResponse;

  getCallTopic(): CallTopic | undefined;
  setCallTopic(value?: CallTopic): GetInsightsResponse;
  hasCallTopic(): boolean;
  clearCallTopic(): GetInsightsResponse;

  getCallSummary(): CallSummary | undefined;
  setCallSummary(value?: CallSummary): GetInsightsResponse;
  hasCallSummary(): boolean;
  clearCallSummary(): GetInsightsResponse;

  getErrorStatus(): google_rpc_status_pb.Status | undefined;
  setErrorStatus(value?: google_rpc_status_pb.Status): GetInsightsResponse;
  hasErrorStatus(): boolean;
  clearErrorStatus(): GetInsightsResponse;

  getResponseTimestamp(): number;
  setResponseTimestamp(value: number): GetInsightsResponse;

  getCallinsightCase(): GetInsightsResponse.CallinsightCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInsightsResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: GetInsightsResponse
  ): GetInsightsResponse.AsObject;
  static serializeBinaryToWriter(
    message: GetInsightsResponse,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): GetInsightsResponse;
  static deserializeBinaryFromReader(
    message: GetInsightsResponse,
    reader: jspb.BinaryReader
  ): GetInsightsResponse;
}

export namespace GetInsightsResponse {
  export type AsObject = {
    orgId: string;
    conversationId: string;
    eventType: EventType;
    customerSentiment?: Sentiment.AsObject;
    agentSentiment?: Sentiment.AsObject;
    callTopic?: CallTopic.AsObject;
    callSummary?: CallSummary.AsObject;
    errorStatus?: google_rpc_status_pb.Status.AsObject;
    responseTimestamp: number;
  };

  export enum CallinsightCase {
    CALLINSIGHT_NOT_SET = 0,
    CUSTOMER_SENTIMENT = 4,
    AGENT_SENTIMENT = 5,
    CALL_TOPIC = 6,
    CALL_SUMMARY = 7,
    ERROR_STATUS = 8,
  }
}

export class Sentiment extends jspb.Message {
  getScore(): number;
  setScore(value: number): Sentiment;

  getMagnitude(): number;
  setMagnitude(value: number): Sentiment;

  getSentiment(): string;
  setSentiment(value: string): Sentiment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sentiment.AsObject;
  static toObject(includeInstance: boolean, msg: Sentiment): Sentiment.AsObject;
  static serializeBinaryToWriter(
    message: Sentiment,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Sentiment;
  static deserializeBinaryFromReader(
    message: Sentiment,
    reader: jspb.BinaryReader
  ): Sentiment;
}

export namespace Sentiment {
  export type AsObject = {
    score: number;
    magnitude: number;
    sentiment: string;
  };
}

export class CallTopic extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallTopic.AsObject;
  static toObject(includeInstance: boolean, msg: CallTopic): CallTopic.AsObject;
  static serializeBinaryToWriter(
    message: CallTopic,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CallTopic;
  static deserializeBinaryFromReader(
    message: CallTopic,
    reader: jspb.BinaryReader
  ): CallTopic;
}

export namespace CallTopic {
  export type AsObject = {};
}

export class CallSummary extends jspb.Message {
  getSummary(): string;
  setSummary(value: string): CallSummary;

  getSummaryAttributesMap(): jspb.Map<string, string>;
  clearSummaryAttributesMap(): CallSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallSummary.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CallSummary
  ): CallSummary.AsObject;
  static serializeBinaryToWriter(
    message: CallSummary,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CallSummary;
  static deserializeBinaryFromReader(
    message: CallSummary,
    reader: jspb.BinaryReader
  ): CallSummary;
}

export namespace CallSummary {
  export type AsObject = {
    summary: string;
    summaryAttributesMap: Array<[string, string]>;
  };
}

export enum EventType {
  EVENT_TYPE_UNSPECIFIED = 0,
  VA_AGENT_TRANSFER = 1,
  AGENT_AGENT_TRANSFER = 2,
  CALL_END = 3,
  CALL_DROP = 4,
}
