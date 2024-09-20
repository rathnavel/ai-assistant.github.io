import { AiInsightClient } from "../proto/serving_grpc_web_pb.js";
import { InsightsServingRequest, InsightServingResponse } from "../proto/serving_pb.js";
import { VASResponse } from "../APIIntegrations/types";

/**
 * gRPC Channel creation and fetch response
 * @param {String} url
 * @param {String} bearerAuthToken
 * @param {String} activeCallId
 * @param {String} orgId
 */

export async function fetchGrpcData(url: string, authToken: string, activeCallId: string, orgId: string): Promise<VASResponse> {
  console.log(`Creating channel for conversationId: ${activeCallId}`);
  const bearerAuthToken = "Bearer " + authToken;
  const client = new AiInsightClient(url, null, null);
  const insightsServingRequest = new InsightsServingRequest();

  insightsServingRequest.setConversationid(activeCallId);
  insightsServingRequest.setMessageid("virtual-agent-call-summary");
  insightsServingRequest.setInsighttype(5);
  insightsServingRequest.setOrgid(orgId);

  console.log("Insightrequest", insightsServingRequest);
  const request = insightsServingRequest.toObject(true);
  console.log("Insightrequest", request);
  console.log("Bearer token", bearerAuthToken);

  try {
    const response = await new Promise<InsightServingResponse>((resolve, reject) => {
      client.insightServing(insightsServingRequest, { authorization: bearerAuthToken }, (err, response) => {
        if (err) {
          reject(err instanceof Error ? err : new Error(err.toString()));
        } else {
          resolve(response);
        }
      });
    });

    console.log("Response:", response);
    const insightServingResponse = response;
    const responseObj = insightServingResponse.toObject(true);
    let content = getContent(responseObj);
    let res: VASResponse = {
      summary: content,
      interactionDateTime: getTimeStamp(responseObj),
      error: null
    };
    console.log("Response from grpc - ", content);
    return res;
  } catch (err: any) {
    console.log("Error in creating grpc connection", err);
    let res: VASResponse = {
      summary: null,
      interactionDateTime: "",
      error: err.message
    };
    return res;
  }
}
export const getContent = (data: any) => {
  console.log("VAH data from grpc ", data);
  let responseList = data["responsecontentList"];
  let callinsightsresult = responseList[0]["callinsightsresult"];
  let content = callinsightsresult["content"];
  let content_parse = JSON.parse(content);
  console.log("VAH content parse ", content_parse);

  return content_parse;
};

export const getTimeStamp = (data: any) => {
  let responseList = data["starttimestamp"];
  let dateTime = new Date(responseList).toString();
  console.log("VAH dateTime  ", dateTime);
  return dateTime;
};

