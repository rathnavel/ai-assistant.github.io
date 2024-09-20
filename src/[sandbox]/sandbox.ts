/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { css, customElement, html, internalProperty, LitElement } from "lit-element";
import "../index";

@customElement("wcc-widget-starter-react")
export class Sandbox extends LitElement {
  // @internalProperty() darkTheme = false;
  // @internalProperty() theme = "lumos";
  // @internalProperty() demoSummary = "";
  // @internalProperty() shouldShowDemoSummary = false;
  // @internalProperty() containerWidth = "100%";
  // @internalProperty() containerHeight = "90vh";

  theDemoSummary =
    "[{'widgetType':'cds','summary':{'context':'The context of the call was...','reason':'The reason for the call was...','last_action':'The last action item was...'}}]";

  static get styles() {
    return css`
      .container {
        box-sizing: border-box;
        padding: 20px;
        min-height: calc(100vh - 27px);
        background-color: var(--md-secondary-bg-color);
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100vw;
      }
      .default-maximize-area {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
      }
      .grid {
        display: grid;
        grid-template-areas: "iframes css" "async async";

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 50% 50%;
        height: 80vh;
        background-color: #eee;
        border: 1px solid #ccc;
        grid-gap: 1px;
      }
      .toggle {
        display: flex;
        height: 50px;
      }

      .toggle-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        border-bottom: 1px solid gray;
        height: 65px;
        background-color: var(--md-secondary-bg-color);
      }

      .switch-container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .switch-container md-label {
        margin: 0 1em;
      }

      md-input.theme-switch::part(input) {
        margin-bottom: -1rem;
      }

      .widget-container {
        width: 100%;
        height: 90vh;
      }
    `;
  }

  // get selectedThemeIndex() {
  //   return this.theme === "lumos" ? 0 : 1;
  // }

  // themeToggle() {
  //   return html`
  //     <div class="toggle-container">
  //         <input
  //           type="text"
  //           id="height-switch"
  //           class="theme-switch"
  //           data-aspect="responsive-height"
  //           @click=${(e: MouseEvent) => this.toggleSetting(e, "responsive-height")}
  //           @input-change=${(e: MouseEvent) => this.toggleSetting(e, "responsive-height")}
  //           value=${`90vh`}
  //         />
  //       </div>
  //     </div>
  //   `;
  // }

  // themeChanged(e: CustomEvent) {
  //   this.theme = e.detail.selected as any;
  //   this.requestUpdate();
  // }

  // toggleSetting(e: Event, aspect: string) {
  //   const composedPath = e.composedPath();
  //   const target = composedPath[0] as unknown as HTMLInputElement;
  //   if (aspect === "responsive-width") {
  //     this.containerWidth = target.value;
  //     this.requestUpdate();
  //   } else if (aspect === "responsive-height") {
  //     this.containerHeight = target.value;
  //     this.requestUpdate();
  //   } else if (aspect === "darkTheme") {
  //     this.darkTheme = !this.darkTheme;
  //     this.requestUpdate();
  //   } else if (aspect === "showDemoSummary") {
  //     this.shouldShowDemoSummary = !this.shouldShowDemoSummary;
  //     this.demoSummary = this.shouldShowDemoSummary ? this.theDemoSummary : "";
  //     this.requestUpdate();
  //   } else return console.error("Invalid data-aspect input");
  // }

  render() {
    // console.log("JL: this.shouldShowDemoSummary", this.shouldShowDemoSummary);
    return html`
      <ai-assistant 
           agentId="Test id" 
           orgId=${process.env.REACT_APP_ORG_ID || "Test org"}
           accessToken="accessToken"
           interactionId="123"
           isLoggedIntoStation="true" 
           isInSandboxMode="true" env="intgus1"></ai-assistant>`;
  }
}

