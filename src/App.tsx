import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import VirtualAssistant from "./components/VirtualAssistant";

function App() {
  const [formData, setFormData] = useState<{
    env: string;
    orgId: string;
    accessToken: string;
    interactionId: string;
  }>({
    env: "",
    orgId: "",
    accessToken: "",
    interactionId: "",
  });

  // State to store submitted form data
  const [submittedData, setSubmittedData] = useState<{
    env: string;
    orgId: string;
    accessToken: string;
    interactionId: string;
  }>({
    env: "intgus1",
    orgId: "",
    accessToken: "",
    interactionId: "",
  });

  // Handle input change
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Store form data in new state
    setSubmittedData(formData);
    console.log("Form Submitted: ", formData);
  };
  console.log("formData-->", formData, submittedData);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="env">DataCenter</label>
            <select
              id="env"
              className="form-control"
              name="env"
              value={formData.env}
              onChange={handleChange}
            >
              <option value="">--Select Env--</option>
              <option value="intgus1">intgus1</option>
              <option value="qaus1">qaus1</option>
              <option value="loadus1">loadus1</option>
              <option value="produs1">produs1</option>
              <option value="prodeu1">prodeu1</option>
              <option value="prodeu2">prodeu2</option>
              <option value="prodanz1">prodanz1</option>
              <option value="prodca1">prodca1</option>
              <option value="prodjp1">prodjp1</option>
              <option value="prodsg1">prodsg1</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="orgId">Org ID</label>
            <input
              type="text"
              className="form-control"
              id="orgId"
              name="orgId"
              value={formData.orgId}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="accessToken">Access Token</label>
            <input
              type="text"
              className="form-control"
              id="accessToken"
              name="accessToken"
              value={formData.accessToken}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="interactionId">Interaction ID</label>
            <input
              type="text"
              className="form-control"
              id="interactionId"
              name="interactionId"
              value={formData.interactionId}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
        <VirtualAssistant {...submittedData} />
      </form>
    </div>
  );
}

export default App;
