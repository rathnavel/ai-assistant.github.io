import * as jspb from "google-protobuf";

export class StreamingRecognitionResult extends jspb.Message {
  getAlternativesList(): Array<SpeechRecognitionAlternative>;
  setAlternativesList(
    value: Array<SpeechRecognitionAlternative>
  ): StreamingRecognitionResult;
  clearAlternativesList(): StreamingRecognitionResult;
  addAlternatives(
    value?: SpeechRecognitionAlternative,
    index?: number
  ): SpeechRecognitionAlternative;

  getIsFinal(): boolean;
  setIsFinal(value: boolean): StreamingRecognitionResult;

  getResultEndTime(): Duration | undefined;
  setResultEndTime(value?: Duration): StreamingRecognitionResult;
  hasResultEndTime(): boolean;
  clearResultEndTime(): StreamingRecognitionResult;

  getChannelTag(): number;
  setChannelTag(value: number): StreamingRecognitionResult;

  getLanguageCode(): string;
  setLanguageCode(value: string): StreamingRecognitionResult;

  getHasAppliedRecordingOffsets(): boolean;
  setHasAppliedRecordingOffsets(value: boolean): StreamingRecognitionResult;

  getSpeakerIdsList(): Array<number>;
  setSpeakerIdsList(value: Array<number>): StreamingRecognitionResult;
  clearSpeakerIdsList(): StreamingRecognitionResult;
  addSpeakerIds(value: number, index?: number): StreamingRecognitionResult;

  getLastPacketMetricsUnixTimestampMs(): number;
  setLastPacketMetricsUnixTimestampMs(
    value: number
  ): StreamingRecognitionResult;

  getMessageType(): string;
  setMessageType(value: string): StreamingRecognitionResult;

  getResponseEvent(): OutputEvent;
  setResponseEvent(value: OutputEvent): StreamingRecognitionResult;

  getRole(): StreamingRecognitionResult.Role;
  setRole(value: StreamingRecognitionResult.Role): StreamingRecognitionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamingRecognitionResult.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: StreamingRecognitionResult
  ): StreamingRecognitionResult.AsObject;
  static serializeBinaryToWriter(
    message: StreamingRecognitionResult,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): StreamingRecognitionResult;
  static deserializeBinaryFromReader(
    message: StreamingRecognitionResult,
    reader: jspb.BinaryReader
  ): StreamingRecognitionResult;
}

export namespace StreamingRecognitionResult {
  export type AsObject = {
    alternativesList: Array<SpeechRecognitionAlternative.AsObject>;
    isFinal: boolean;
    resultEndTime?: Duration.AsObject;
    channelTag: number;
    languageCode: string;
    hasAppliedRecordingOffsets: boolean;
    speakerIdsList: Array<number>;
    lastPacketMetricsUnixTimestampMs: number;
    messageType: string;
    responseEvent: OutputEvent;
    role: StreamingRecognitionResult.Role;
  };

  export enum Role {
    UNDEFINED = 0,
    CALLER = 1,
    AGENT = 2,
  }
}

export class SpeechRecognitionAlternative extends jspb.Message {
  getTranscript(): string;
  setTranscript(value: string): SpeechRecognitionAlternative;

  getConfidence(): number;
  setConfidence(value: number): SpeechRecognitionAlternative;

  getWordsList(): Array<WordInfo>;
  setWordsList(value: Array<WordInfo>): SpeechRecognitionAlternative;
  clearWordsList(): SpeechRecognitionAlternative;
  addWords(value?: WordInfo, index?: number): WordInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechRecognitionAlternative.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SpeechRecognitionAlternative
  ): SpeechRecognitionAlternative.AsObject;
  static serializeBinaryToWriter(
    message: SpeechRecognitionAlternative,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SpeechRecognitionAlternative;
  static deserializeBinaryFromReader(
    message: SpeechRecognitionAlternative,
    reader: jspb.BinaryReader
  ): SpeechRecognitionAlternative;
}

export namespace SpeechRecognitionAlternative {
  export type AsObject = {
    transcript: string;
    confidence: number;
    wordsList: Array<WordInfo.AsObject>;
  };
}

export class WordInfo extends jspb.Message {
  getStartTime(): Duration | undefined;
  setStartTime(value?: Duration): WordInfo;
  hasStartTime(): boolean;
  clearStartTime(): WordInfo;

  getEndTime(): Duration | undefined;
  setEndTime(value?: Duration): WordInfo;
  hasEndTime(): boolean;
  clearEndTime(): WordInfo;

  getWord(): string;
  setWord(value: string): WordInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WordInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WordInfo): WordInfo.AsObject;
  static serializeBinaryToWriter(
    message: WordInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): WordInfo;
  static deserializeBinaryFromReader(
    message: WordInfo,
    reader: jspb.BinaryReader
  ): WordInfo;
}

export namespace WordInfo {
  export type AsObject = {
    startTime?: Duration.AsObject;
    endTime?: Duration.AsObject;
    word: string;
  };
}

export class Duration extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): Duration;

  getNanos(): number;
  setNanos(value: number): Duration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Duration.AsObject;
  static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
  static serializeBinaryToWriter(
    message: Duration,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Duration;
  static deserializeBinaryFromReader(
    message: Duration,
    reader: jspb.BinaryReader
  ): Duration;
}

export namespace Duration {
  export type AsObject = {
    seconds: number;
    nanos: number;
  };
}

export class Status extends jspb.Message {
  getCode(): number;
  setCode(value: number): Status;

  getMessage(): string;
  setMessage(value: string): Status;

  getDetails(): string;
  setDetails(value: string): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(
    message: Status,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(
    message: Status,
    reader: jspb.BinaryReader
  ): Status;
}

export namespace Status {
  export type AsObject = {
    code: number;
    message: string;
    details: string;
  };
}

export class RecognitionFlags extends jspb.Message {
  getStallTimers(): boolean;
  setStallTimers(value: boolean): RecognitionFlags;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognitionFlags.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RecognitionFlags
  ): RecognitionFlags.AsObject;
  static serializeBinaryToWriter(
    message: RecognitionFlags,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RecognitionFlags;
  static deserializeBinaryFromReader(
    message: RecognitionFlags,
    reader: jspb.BinaryReader
  ): RecognitionFlags;
}

export namespace RecognitionFlags {
  export type AsObject = {
    stallTimers: boolean;
  };
}

export class SpeechTimers extends jspb.Message {
  getNoInputTimeoutMs(): number;
  setNoInputTimeoutMs(value: number): SpeechTimers;

  getCompleteTimeoutMs(): number;
  setCompleteTimeoutMs(value: number): SpeechTimers;

  getIncompleteTimeoutMs(): number;
  setIncompleteTimeoutMs(value: number): SpeechTimers;

  getMaxSpeechTimeoutMs(): number;
  setMaxSpeechTimeoutMs(value: number): SpeechTimers;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechTimers.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SpeechTimers
  ): SpeechTimers.AsObject;
  static serializeBinaryToWriter(
    message: SpeechTimers,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SpeechTimers;
  static deserializeBinaryFromReader(
    message: SpeechTimers,
    reader: jspb.BinaryReader
  ): SpeechTimers;
}

export namespace SpeechTimers {
  export type AsObject = {
    noInputTimeoutMs: number;
    completeTimeoutMs: number;
    incompleteTimeoutMs: number;
    maxSpeechTimeoutMs: number;
  };
}

export class DTMFConfig extends jspb.Message {
  getInterDigitTimeout(): number;
  setInterDigitTimeout(value: number): DTMFConfig;

  getTermchar(): string;
  setTermchar(value: string): DTMFConfig;

  getDtmfLength(): number;
  setDtmfLength(value: number): DTMFConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DTMFConfig.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: DTMFConfig
  ): DTMFConfig.AsObject;
  static serializeBinaryToWriter(
    message: DTMFConfig,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): DTMFConfig;
  static deserializeBinaryFromReader(
    message: DTMFConfig,
    reader: jspb.BinaryReader
  ): DTMFConfig;
}

export namespace DTMFConfig {
  export type AsObject = {
    interDigitTimeout: number;
    termchar: string;
    dtmfLength: number;
  };
}

export class RecognitionResource extends jspb.Message {
  getBuiltingrammar(): BuiltInGrammar;
  setBuiltingrammar(value: BuiltInGrammar): RecognitionResource;

  getInlinegrammar(): InlineGrammar | undefined;
  setInlinegrammar(value?: InlineGrammar): RecognitionResource;
  hasInlinegrammar(): boolean;
  clearInlinegrammar(): RecognitionResource;

  getLanguage(): string;
  setLanguage(value: string): RecognitionResource;

  getWeight(): number;
  setWeight(value: number): RecognitionResource;

  getGrammarId(): string;
  setGrammarId(value: string): RecognitionResource;

  getGrammarCase(): RecognitionResource.GrammarCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognitionResource.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RecognitionResource
  ): RecognitionResource.AsObject;
  static serializeBinaryToWriter(
    message: RecognitionResource,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RecognitionResource;
  static deserializeBinaryFromReader(
    message: RecognitionResource,
    reader: jspb.BinaryReader
  ): RecognitionResource;
}

export namespace RecognitionResource {
  export type AsObject = {
    builtingrammar: BuiltInGrammar;
    inlinegrammar?: InlineGrammar.AsObject;
    language: string;
    weight: number;
    grammarId: string;
  };

  export enum GrammarCase {
    GRAMMAR_NOT_SET = 0,
    BUILTINGRAMMAR = 1,
    INLINEGRAMMAR = 5,
  }
}

export class InlineGrammar extends jspb.Message {
  getMediaType(): EnumMediaType;
  setMediaType(value: EnumMediaType): InlineGrammar;

  getGrammar(): string;
  setGrammar(value: string): InlineGrammar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InlineGrammar.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: InlineGrammar
  ): InlineGrammar.AsObject;
  static serializeBinaryToWriter(
    message: InlineGrammar,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): InlineGrammar;
  static deserializeBinaryFromReader(
    message: InlineGrammar,
    reader: jspb.BinaryReader
  ): InlineGrammar;
}

export namespace InlineGrammar {
  export type AsObject = {
    mediaType: EnumMediaType;
    grammar: string;
  };
}

export class Model extends jspb.Message {
  getModelName(): string;
  setModelName(value: string): Model;

  getModelVariant(): string;
  setModelVariant(value: string): Model;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static serializeBinaryToWriter(
    message: Model,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(
    message: Model,
    reader: jspb.BinaryReader
  ): Model;
}

export namespace Model {
  export type AsObject = {
    modelName: string;
    modelVariant: string;
  };
}

export class RecognitionRequestConfig extends jspb.Message {
  getEncoding(): RecognitionRequestConfig.AudioEncoding;
  setEncoding(
    value: RecognitionRequestConfig.AudioEncoding
  ): RecognitionRequestConfig;

  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): RecognitionRequestConfig;

  getLanguageCode(): string;
  setLanguageCode(value: string): RecognitionRequestConfig;

  getMaxAlternatives(): number;
  setMaxAlternatives(value: number): RecognitionRequestConfig;

  getProfanityFilter(): boolean;
  setProfanityFilter(value: boolean): RecognitionRequestConfig;

  getSpeechContextsList(): Array<SpeechContext>;
  setSpeechContextsList(value: Array<SpeechContext>): RecognitionRequestConfig;
  clearSpeechContextsList(): RecognitionRequestConfig;
  addSpeechContexts(value?: SpeechContext, index?: number): SpeechContext;

  getSingleUtterance(): boolean;
  setSingleUtterance(value: boolean): RecognitionRequestConfig;

  getInterimResults(): boolean;
  setInterimResults(value: boolean): RecognitionRequestConfig;

  getEnableAutomaticPunctuation(): boolean;
  setEnableAutomaticPunctuation(value: boolean): RecognitionRequestConfig;

  getSpeechTimers(): SpeechTimers | undefined;
  setSpeechTimers(value?: SpeechTimers): RecognitionRequestConfig;
  hasSpeechTimers(): boolean;
  clearSpeechTimers(): RecognitionRequestConfig;

  getSpeechDetectionSensitivity(): number;
  setSpeechDetectionSensitivity(value: number): RecognitionRequestConfig;

  getNbest(): number;
  setNbest(value: number): RecognitionRequestConfig;

  getConfidenceLevel(): number;
  setConfidenceLevel(value: number): RecognitionRequestConfig;

  getCallerChannelNumber(): number;
  setCallerChannelNumber(value: number): RecognitionRequestConfig;

  getModel(): Model | undefined;
  setModel(value?: Model): RecognitionRequestConfig;
  hasModel(): boolean;
  clearModel(): RecognitionRequestConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecognitionRequestConfig.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: RecognitionRequestConfig
  ): RecognitionRequestConfig.AsObject;
  static serializeBinaryToWriter(
    message: RecognitionRequestConfig,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): RecognitionRequestConfig;
  static deserializeBinaryFromReader(
    message: RecognitionRequestConfig,
    reader: jspb.BinaryReader
  ): RecognitionRequestConfig;
}

export namespace RecognitionRequestConfig {
  export type AsObject = {
    encoding: RecognitionRequestConfig.AudioEncoding;
    sampleRateHertz: number;
    languageCode: string;
    maxAlternatives: number;
    profanityFilter: boolean;
    speechContextsList: Array<SpeechContext.AsObject>;
    singleUtterance: boolean;
    interimResults: boolean;
    enableAutomaticPunctuation: boolean;
    speechTimers?: SpeechTimers.AsObject;
    speechDetectionSensitivity: number;
    nbest: number;
    confidenceLevel: number;
    callerChannelNumber: number;
    model?: Model.AsObject;
  };

  export enum AudioEncoding {
    ENCODING_UNSPECIFIED = 0,
    LINEAR16 = 1,
    MULAW = 3,
    ALAW = 4,
  }
}

export class SpeechContext extends jspb.Message {
  getPhrasesList(): Array<string>;
  setPhrasesList(value: Array<string>): SpeechContext;
  clearPhrasesList(): SpeechContext;
  addPhrases(value: string, index?: number): SpeechContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpeechContext.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SpeechContext
  ): SpeechContext.AsObject;
  static serializeBinaryToWriter(
    message: SpeechContext,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SpeechContext;
  static deserializeBinaryFromReader(
    message: SpeechContext,
    reader: jspb.BinaryReader
  ): SpeechContext;
}

export namespace SpeechContext {
  export type AsObject = {
    phrasesList: Array<string>;
  };
}

export enum OutputEvent {
  EVENT_UNSPECIFIED = 0,
  EVENT_START_OF_INPUT = 1,
  EVENT_END_OF_INPUT = 2,
  EVENT_NO_MATCH = 3,
  EVENT_NO_INPUT = 4,
}
export enum BuiltInGrammar {
  BOOLEAN = 0,
  CURRENCY = 1,
  DATE = 2,
  DIGITS = 3,
  NUMBER = 4,
  PHONE = 5,
  TIME = 6,
  ALPHANUM = 7,
  AMOUNT = 8,
  ORDINAL_NUMBER = 9,
  CARDINAL_NUMBER = 10,
}
export enum EnumMediaType {
  AUTOMATIC = 0,
  APPLICATION_SRGS_XML = 1,
  APPLICATION_X_SWI_GRAMMAR = 2,
  APPLICATION_X_SWI_PARAMETER = 3,
}
