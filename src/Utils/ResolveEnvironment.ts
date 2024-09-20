
interface EnvironmentConfig {
  apiBaseEndpoint: string;
  servingUrl: string;
  splitKeyToken: string;
  notifsDataRegistrationUrl: string;
  eventHandlerUrl: string;
}

const environmentConfigs: { [key: string]: EnvironmentConfig } = {
  "localhost:3000": {
    apiBaseEndpoint: "https://api.intgus1.ciscoccservice.com/",
    servingUrl: "https://serving-api-streaming.intgus1.ciscoccservice.com:443",
    splitKeyToken: "5a5k6k5ql793jg3n79u92hpio14s62ch1d2g",
    notifsDataRegistrationUrl: "https://api.intgus1.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.intgus1.ciscoccservice.com/event"
  },
  "intgus1": {
    apiBaseEndpoint: "https://api.intgus1.ciscoccservice.com/",
    servingUrl: "https://serving-api-streaming.intgus1.ciscoccservice.com:443",
    splitKeyToken: "5a5k6k5ql793jg3n79u92hpio14s62ch1d2g",
    notifsDataRegistrationUrl: "https://api.intgus1.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.intgus1.ciscoccservice.com/event"
  },
  "qaus1": {
    apiBaseEndpoint: "https://api.qaus1.ciscoccservice.com/",
    servingUrl: "https://serving-api-streaming.qaus1.ciscoccservice.com:443",
    splitKeyToken: "dlcgif529hh763abhh1f9bkrbn9v30mjafnk",
    notifsDataRegistrationUrl: "https://api.qaus1.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.qaus1.ciscoccservice.com/event"
  },
  "produs1": {
    apiBaseEndpoint: "https://api.wxcc-us1.cisco.com/",
    servingUrl: "https://serving-api-streaming.produs1.ciscoccservice.com:443",
    splitKeyToken: "m4m7dr8os19fsk0mr62pv2k7751svei2agf",
    notifsDataRegistrationUrl: "https://api.wxcc-us1.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.wxcc-us1.ciscoccservice.com/event"
  },
  "prodeu1": {
    apiBaseEndpoint: "https://api.wxcc-eu1.cisco.com/",
    servingUrl: "https://serving-api-streaming.prodeu1.ciscoccservice.com:443",
    splitKeyToken: "i19g66jrqg94ibspnhsb4e4s9itdu40fra1i",
    notifsDataRegistrationUrl: "https://api.wxcc-eu1.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.wxcc-eu1.ciscoccservice.com/event"
  },
  "prodeu2": {
    apiBaseEndpoint: "https://api.wxcc-eu2.cisco.com/",
    servingUrl: "https://serving-api-streaming.prodeu2.ciscoccservice.com:443",
    splitKeyToken: "jm0mngrlac9e4prj94ib9makf6thj9t28vsk",
    notifsDataRegistrationUrl: "https://api.wxcc-eu2.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.wxcc-eu2.ciscoccservice.com/event"
  },
  "prodanz1": {
    apiBaseEndpoint: "https://api.wxcc-anz1.cisco.com/",
    servingUrl: "https://serving-api-streaming.prodanz1.ciscoccservice.com:443",
    splitKeyToken: "ltc91n7oeneu5vmjcosq3eqkgiijcfg5np74",
    notifsDataRegistrationUrl: "https://api.wxcc-anz1.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.wxcc-anz1.ciscoccservice.com/event"
  },
  "prodca1": {
    apiBaseEndpoint: "https://api.wxcc-ca1.cisco.com/",
    servingUrl: "https://serving-api-streaming.prodca1.ciscoccservice.com:443",
    splitKeyToken: "n50ial75hh7hj6komk1gn7hkghkdihbq0psj",
    notifsDataRegistrationUrl: "https://api.wxcc-ca1.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.wxcc-ca1.ciscoccservice.com/event"
  },
  "prodjp1": {
    apiBaseEndpoint: "https://api.wxcc-jp1.cisco.com/",
    servingUrl: "https://serving-api-streaming.prodjp1.ciscoccservice.com:443",
    splitKeyToken: "mnvn14e6j0od8knul5e1qrv0mpvh6lci728b",
    notifsDataRegistrationUrl: "https://api.wxcc-jp1.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.wxcc-jp1.ciscoccservice.com/event"
  },
  "prodsg1": {
    apiBaseEndpoint: "https://api.wxcc-sg1.cisco.com/",
    servingUrl: "https://serving-api-streaming.prodsg1.ciscoccservice.com:443",
    splitKeyToken: "ttfjfuha18srajn3i6rnakaaao7c9q75a0uj",
    notifsDataRegistrationUrl: "https://api.wxcc-sg1.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.wxcc-sg1.ciscoccservice.com/event"
  },
  "loadus1": {
    apiBaseEndpoint: "https://api.loadus1.cisco.com/",
    servingUrl: "https://serving-api-streaming.loadus1.ciscoccservice.com:443",
    splitKeyToken: "ttfjfuha18srajn3i6rnakaaao7c9q75a0uj",
    notifsDataRegistrationUrl: "https://api.loadus1.ciscoccservice.com/v1/realtime/subscribe",
    eventHandlerUrl: "https://event-handler.loadus1.ciscoccservice.com/event"
  }
};

const ResolveEnvironment = (env: string): EnvironmentConfig => {
  // const url = window.location.href.split("/")[2];
  console.log("AI Assistant Environment", env);

  const config = environmentConfigs[env];

  if (config) {
    console.log("Environment configuration found", config);
    return config;
  }

  console.warn("No environment configuration found for ", env);
  return {
    apiBaseEndpoint: "",
    servingUrl: "",
    splitKeyToken: "",
    notifsDataRegistrationUrl: "",
    eventHandlerUrl: ""
  };
};

export default ResolveEnvironment;
