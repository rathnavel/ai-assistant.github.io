import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "./Store";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import VirtualAssistant from './components/VirtualAssistant';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// const ReduxProviderWrapper: React.FC<any> = (props) => {
//   return (
//     <Provider store={store}>
//       <VirtualAssistant {...props} />
//     </Provider>
//   );
// };

// export default ReduxProviderWrapper;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import { DireflowComponent } from "direflow-component";
// import ReduxProviderWrapper from "./main";

// export interface DireflowProperties {
//   env: string;
//   orgId: string;
//   accessToken: string;
//   interactionId: string;
// }

// const direflowProperties: DireflowProperties = {
//   interactionId: "123123",
//   env: "intgus1",
//   orgId: "",
//   accessToken: "",
// };

// export default DireflowComponent.create({
//   component: ReduxProviderWrapper,
//   configuration: {
//     tagname: "ai-assistant",
//     useShadow: true,
//   },
//   properties: direflowProperties,
//   plugins: [
//     {
//       name: "font-loader",
//       options: {
//         google: {
//           families: ["Advent Pro", "Noto Sans JP"],
//         },
//       },
//     },
//     // Include any other plugins you're using
//   ],
// });
