import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ThumbsUpIconFill from "./like-filled.svg";
import ThumbsDownIconFill from "./unlike-filled.svg";
import Copy from "./copy.svg";
import "./SummaryCard.css";
import { RootState } from "../../Store";

interface SummaryCardProps {
  content: Map<string, string>;
  contentRaw: string;
  timestamp: string;
  widgetType: string;
  children?: React.ReactNode;
}

const SummaryCard: FC<SummaryCardProps> = ({
  content,
  contentRaw,
  timestamp,
  widgetType,
  children,
}) => {
  const [upClicked, setUpClicked] = useState(false);
  const [downClicked, setDownClicked] = useState(false);
  const cardEl = useRef<HTMLElement>(null);
  const [copyClicked, setCopyClicked] = useState(false);
  const { orgId, agentId, aniId } = useSelector(
    (state: RootState) => state.sessionVariables
  );

  useEffect(() => {
    if (cardEl.current) {
      const style = document.createElement("style");
      style.innerHTML = ".md-card-content { height: auto !important; }";
      cardEl.current.shadowRoot?.appendChild(style);
    }
    // console.info("Summary Card, content", content);
  }, []);

  async function trackFeedback(upClicked = false, downClicked = false) {
    console.info("click", upClicked);

    if (upClicked) {
      setUpClicked(true);
      setDownClicked(false);
    }
    if (downClicked) {
      setUpClicked(false);
      setDownClicked(true);
    }
  }
  function copyToClipboard() {
    console.info("copy clicked", contentRaw);
    navigator.clipboard.writeText(contentRaw);
    setCopyClicked(true);
  }
  return (
    <div
      tabIndex={0}
      aria-label={contentRaw}
      className="summary-card-container"
    >
      <div className="content-description">
        {Array.from(content.entries()).map(([key, value]) => (
          <div key={key}>
            <span
              style={{ fontWeight: "400", fontSize: "14px" }}
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </div>
        ))}
      </div>
      {/* footer */}
      <div
        slot="footer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0rem",
          width: "100%",
          borderTop: "1px solid #B2B2B2",
          paddingTop: "5px",
        }}
      >
        <div className="time-data">
          <time
            aria-hidden="true"
            dateTime={timestamp}
            style={{
              fontWeight: "400",
              fontSize: "14px",
              marginRight: "0.5rem",
            }}
          >
            {timestamp}
          </time>
          <span style={{ marginRight: "0.5rem" }}>&#8226;</span>{" "}
          {/* Dot separator */}
        </div>
        <div
          style={{
            display: "flex",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              paddingRight: "5px",
            }}
            onClick={() => trackFeedback(true, false)}
          >
            <img alt="logo" width="32" height="32" src={ThumbsUpIconFill} />
          </div>
          <div onClick={() => trackFeedback(false, true)}>
            <img alt="logo" width="32" height="32" src={ThumbsDownIconFill} />
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <div
            className="momentum-design-feedback-icon_16"
            onClick={() => copyToClipboard()}
          >
             <img alt="logo" width="16" height="16" src={Copy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
