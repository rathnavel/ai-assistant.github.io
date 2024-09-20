// source: messages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.com.cisco.wcc.ccai.v1.Message', null, global);
goog.exportSymbol('proto.com.cisco.wcc.ccai.v1.SentimentAnalysis', null, global);
goog.exportSymbol('proto.com.cisco.wcc.ccai.v1.Timestamp', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.cisco.wcc.ccai.v1.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.cisco.wcc.ccai.v1.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.cisco.wcc.ccai.v1.Timestamp.displayName = 'proto.com.cisco.wcc.ccai.v1.Timestamp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.cisco.wcc.ccai.v1.SentimentAnalysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.displayName = 'proto.com.cisco.wcc.ccai.v1.SentimentAnalysis';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.cisco.wcc.ccai.v1.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.cisco.wcc.ccai.v1.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.cisco.wcc.ccai.v1.Message.displayName = 'proto.com.cisco.wcc.ccai.v1.Message';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.cisco.wcc.ccai.v1.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.com.cisco.wcc.ccai.v1.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.cisco.wcc.ccai.v1.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.cisco.wcc.ccai.v1.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    seconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nanos: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.cisco.wcc.ccai.v1.Timestamp}
 */
proto.com.cisco.wcc.ccai.v1.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.cisco.wcc.ccai.v1.Timestamp;
  return proto.com.cisco.wcc.ccai.v1.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.cisco.wcc.ccai.v1.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.cisco.wcc.ccai.v1.Timestamp}
 */
proto.com.cisco.wcc.ccai.v1.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNanos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.cisco.wcc.ccai.v1.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.cisco.wcc.ccai.v1.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.cisco.wcc.ccai.v1.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.cisco.wcc.ccai.v1.Timestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeconds();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNanos();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int64 seconds = 1;
 * @return {number}
 */
proto.com.cisco.wcc.ccai.v1.Timestamp.prototype.getSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.cisco.wcc.ccai.v1.Timestamp} returns this
 */
proto.com.cisco.wcc.ccai.v1.Timestamp.prototype.setSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 nanos = 2;
 * @return {number}
 */
proto.com.cisco.wcc.ccai.v1.Timestamp.prototype.getNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.com.cisco.wcc.ccai.v1.Timestamp} returns this
 */
proto.com.cisco.wcc.ccai.v1.Timestamp.prototype.setNanos = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.prototype.toObject = function(opt_includeInstance) {
  return proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.cisco.wcc.ccai.v1.SentimentAnalysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    magnitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.cisco.wcc.ccai.v1.SentimentAnalysis}
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.cisco.wcc.ccai.v1.SentimentAnalysis;
  return proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.cisco.wcc.ccai.v1.SentimentAnalysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.cisco.wcc.ccai.v1.SentimentAnalysis}
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScore(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMagnitude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.cisco.wcc.ccai.v1.SentimentAnalysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMagnitude();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float score = 1;
 * @return {number}
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.com.cisco.wcc.ccai.v1.SentimentAnalysis} returns this
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float magnitude = 2;
 * @return {number}
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.prototype.getMagnitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.com.cisco.wcc.ccai.v1.SentimentAnalysis} returns this
 */
proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.prototype.setMagnitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.com.cisco.wcc.ccai.v1.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.cisco.wcc.ccai.v1.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.cisco.wcc.ccai.v1.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    languagecode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    participant: jspb.Message.getFieldWithDefault(msg, 4, ""),
    participantrole: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createTime: (f = msg.getCreateTime()) && proto.com.cisco.wcc.ccai.v1.Timestamp.toObject(includeInstance, f),
    sentimentAnalysis: (f = msg.getSentimentAnalysis()) && proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.cisco.wcc.ccai.v1.Message}
 */
proto.com.cisco.wcc.ccai.v1.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.cisco.wcc.ccai.v1.Message;
  return proto.com.cisco.wcc.ccai.v1.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.cisco.wcc.ccai.v1.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.cisco.wcc.ccai.v1.Message}
 */
proto.com.cisco.wcc.ccai.v1.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguagecode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipant(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantrole(value);
      break;
    case 6:
      var value = new proto.com.cisco.wcc.ccai.v1.Timestamp;
      reader.readMessage(value,proto.com.cisco.wcc.ccai.v1.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 8:
      var value = new proto.com.cisco.wcc.ccai.v1.SentimentAnalysis;
      reader.readMessage(value,proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.deserializeBinaryFromReader);
      msg.setSentimentAnalysis(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.cisco.wcc.ccai.v1.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.cisco.wcc.ccai.v1.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.cisco.wcc.ccai.v1.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLanguagecode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParticipant();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getParticipantrole();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.com.cisco.wcc.ccai.v1.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSentimentAnalysis();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.com.cisco.wcc.ccai.v1.SentimentAnalysis.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.cisco.wcc.ccai.v1.Message} returns this
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.cisco.wcc.ccai.v1.Message} returns this
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string languageCode = 3;
 * @return {string}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.getLanguagecode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.cisco.wcc.ccai.v1.Message} returns this
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.setLanguagecode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string participant = 4;
 * @return {string}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.getParticipant = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.cisco.wcc.ccai.v1.Message} returns this
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.setParticipant = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string participantRole = 5;
 * @return {string}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.getParticipantrole = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.cisco.wcc.ccai.v1.Message} returns this
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.setParticipantrole = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Timestamp create_time = 6;
 * @return {?proto.com.cisco.wcc.ccai.v1.Timestamp}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.getCreateTime = function() {
  return /** @type{?proto.com.cisco.wcc.ccai.v1.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.com.cisco.wcc.ccai.v1.Timestamp, 6));
};


/**
 * @param {?proto.com.cisco.wcc.ccai.v1.Timestamp|undefined} value
 * @return {!proto.com.cisco.wcc.ccai.v1.Message} returns this
*/
proto.com.cisco.wcc.ccai.v1.Message.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.cisco.wcc.ccai.v1.Message} returns this
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SentimentAnalysis sentiment_analysis = 8;
 * @return {?proto.com.cisco.wcc.ccai.v1.SentimentAnalysis}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.getSentimentAnalysis = function() {
  return /** @type{?proto.com.cisco.wcc.ccai.v1.SentimentAnalysis} */ (
    jspb.Message.getWrapperField(this, proto.com.cisco.wcc.ccai.v1.SentimentAnalysis, 8));
};


/**
 * @param {?proto.com.cisco.wcc.ccai.v1.SentimentAnalysis|undefined} value
 * @return {!proto.com.cisco.wcc.ccai.v1.Message} returns this
*/
proto.com.cisco.wcc.ccai.v1.Message.prototype.setSentimentAnalysis = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.cisco.wcc.ccai.v1.Message} returns this
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.clearSentimentAnalysis = function() {
  return this.setSentimentAnalysis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.cisco.wcc.ccai.v1.Message.prototype.hasSentimentAnalysis = function() {
  return jspb.Message.getField(this, 8) != null;
};


goog.object.extend(exports, proto.com.cisco.wcc.ccai.v1);
