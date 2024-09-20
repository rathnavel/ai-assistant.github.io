import React, { FC, useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchVASData } from "../../APIIntegrations/VASummary";
import { setAccessToken, setEventHandlerUrl } from "../../Utils/SessionVariables";
import EnvironmentComponent from "../../Utils/ResolveEnvironment";
import AssistantPanel from "../AssistantPanel/AssistantPanel";

interface IProps {
  env: string;
  orgId: string;
  accessToken: string;
  interactionId: string;
}

const VirtualAssistant: FC<IProps> = (props) => {
  const apiBaseURL = useRef<string>("");
  const servingURL = useRef<string>("");
  const websocketRegisterUrl = useRef<string>("");

  // #region Redux Store
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store
  //#endregion


  const handleCreateGRPCChannel = useCallback(() => {
    const host = servingURL.current; // The URL for the gRPC service
    const authToken = props.accessToken;
    const orgId = props.orgId;
    const interactionId = props.interactionId;
    console.info("Started Fetching VAH Data", host, interactionId, orgId, authToken);
    // Dispatch the thunk action to fetch the VAH data
    dispatch(fetchVASData({ host, authToken, interactionId, orgId }));
  }, [dispatch, props.accessToken, props.orgId, props.interactionId]);

  //#region Desktop Integration
  const RequestSummary = (): any => {
    console.info("Requesting the VA Summary., Interaction ID: ", props.interactionId);

    // if interaction id present get vah data
    if (props.interactionId && props.interactionId !== null) {
      handleCreateGRPCChannel();
    } else {
      console.info("Requesting the VA Summary is stopped, due to empty Interaction ID");
    }
  };

  const init = (splitKey: string) => {
    //#region Feature Flag Check
    console.info("Skipping Initializing/Validating the Split IO SDK");
    RequestSummary();
    return true;
  };

  useEffect(() => {
    console.info("Starts here ..");
    //resolve the environment
    const envValues = EnvironmentComponent(props.env);

    if (envValues.apiBaseEndpoint !== "") {
      apiBaseURL.current = envValues.apiBaseEndpoint;
      servingURL.current = envValues.servingUrl;
      websocketRegisterUrl.current = envValues.notifsDataRegistrationUrl;

      console.info("API Base url ", apiBaseURL.current);
      dispatch(setAccessToken(props.accessToken));
      dispatch(setEventHandlerUrl(envValues.eventHandlerUrl));

      setTimeout(() => {
        console.info("Start the Initializing Split IO SDK");
        init(envValues.splitKeyToken);
      }, 1000);
    }
  }, [props.accessToken, props.orgId, props.interactionId, props.env]);

  return (
      <div className="virtual-assistance-summary">
        <AssistantPanel />
      </div>
  );
};

export default VirtualAssistant;

