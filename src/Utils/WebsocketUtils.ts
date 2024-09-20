import axios, { AxiosResponse } from "axios";

export async function registerToNotifsDataWebsocket(url: string, token: string, callback: (response: AxiosResponse) => void): Promise<void> {
  try {
    const body = {
      "force": true,
      "allowMultiLogin": true,
      "clientType": "AI_ASSISTANT_AGENTX"
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.post(url, body, config);
    callback(response);
  } catch (error) {
    console.error("Could not register to websocket ", error);
  }
}
