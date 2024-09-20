import React, { FC } from "react";
import AIIcon from "./icon.svg";

type Header = {
    header: string;
    style?: boolean;
}

const AssistantPanelHeader: FC<Header> = ( {header, style}: Header ) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "0.5rem",
        position: "relative",
        left: style ? "-10px" : "0"
      }}
    >
      <div className="momentum-design-icon_16">
        <img src={AIIcon} alt="AI Icon" />
      </div>
      <div
        style={{
          gap: "4px",
          fontSize: "0.90rem",
          fontWeight: "bold",
          paddingLeft: "12px"
        }}
      >
        <div tabIndex={0} aria-label={header}>
          {header}
        </div>
      </div>
    </div>
  );
};


export default AssistantPanelHeader;
