import React, { FC } from "react";

interface SectionDescriptionProps {
  description: string;
}

const AssistantPanelSectionDescription: FC<SectionDescriptionProps> = (props) => (
  <div
    style={{
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "22px",
      textAlign: "center",
      padding: "10px"
    }}
  >
    <div role="alert" aria-live="assertive">
      {props.description}
    </div>
  </div>
);

export type { SectionDescriptionProps };
export default AssistantPanelSectionDescription;

