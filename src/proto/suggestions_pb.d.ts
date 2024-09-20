import * as jspb from "google-protobuf";

export class AgentAnswerResult extends jspb.Message {
  getAgentanswer(): AgentAnswer | undefined;
  setAgentanswer(value?: AgentAnswer): AgentAnswerResult;
  hasAgentanswer(): boolean;
  clearAgentanswer(): AgentAnswerResult;

  getAnswerOneofCase(): AgentAnswerResult.AnswerOneofCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentAnswerResult.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AgentAnswerResult
  ): AgentAnswerResult.AsObject;
  static serializeBinaryToWriter(
    message: AgentAnswerResult,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AgentAnswerResult;
  static deserializeBinaryFromReader(
    message: AgentAnswerResult,
    reader: jspb.BinaryReader
  ): AgentAnswerResult;
}

export namespace AgentAnswerResult {
  export type AsObject = {
    agentanswer?: AgentAnswer.AsObject;
  };

  export enum AnswerOneofCase {
    ANSWER_ONEOF_NOT_SET = 0,
    AGENTANSWER = 2,
  }
}

export class AgentAnswer extends jspb.Message {
  getAnswersList(): Array<Answer>;
  setAnswersList(value: Array<Answer>): AgentAnswer;
  clearAnswersList(): AgentAnswer;
  addAnswers(value?: Answer, index?: number): Answer;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): AgentAnswer;
  clearTagsList(): AgentAnswer;
  addTags(value: string, index?: number): AgentAnswer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentAnswer.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: AgentAnswer
  ): AgentAnswer.AsObject;
  static serializeBinaryToWriter(
    message: AgentAnswer,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): AgentAnswer;
  static deserializeBinaryFromReader(
    message: AgentAnswer,
    reader: jspb.BinaryReader
  ): AgentAnswer;
}

export namespace AgentAnswer {
  export type AsObject = {
    answersList: Array<Answer.AsObject>;
    tagsList: Array<string>;
  };
}

export class Answer extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Answer;

  getUri(): string;
  setUri(value: string): Answer;

  getSnippetsList(): Array<string>;
  setSnippetsList(value: Array<string>): Answer;
  clearSnippetsList(): Answer;
  addSnippets(value: string, index?: number): Answer;

  getDescription(): string;
  setDescription(value: string): Answer;

  getConfidence(): number;
  setConfidence(value: number): Answer;

  getSource(): string;
  setSource(value: string): Answer;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): Answer;

  getAnswerRecord(): string;
  setAnswerRecord(value: string): Answer;

  getHighlightList(): Array<range>;
  setHighlightList(value: Array<range>): Answer;
  clearHighlightList(): Answer;
  addHighlight(value?: range, index?: number): range;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Answer.AsObject;
  static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
  static serializeBinaryToWriter(
    message: Answer,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Answer;
  static deserializeBinaryFromReader(
    message: Answer,
    reader: jspb.BinaryReader
  ): Answer;
}

export namespace Answer {
  export type AsObject = {
    title: string;
    uri: string;
    snippetsList: Array<string>;
    description: string;
    confidence: number;
    source: string;
    metadataMap: Array<[string, string]>;
    answerRecord: string;
    highlightList: Array<range.AsObject>;
  };
}

export class range extends jspb.Message {
  getStart(): number;
  setStart(value: number): range;

  getEnd(): number;
  setEnd(value: number): range;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): range.AsObject;
  static toObject(includeInstance: boolean, msg: range): range.AsObject;
  static serializeBinaryToWriter(
    message: range,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): range;
  static deserializeBinaryFromReader(
    message: range,
    reader: jspb.BinaryReader
  ): range;
}

export namespace range {
  export type AsObject = {
    start: number;
    end: number;
  };
}
