import React, { useEffect, useMemo, useRef, useState } from "react";
import AssistantPanelHeader from "./AssistantPanelHeader";
import { FormatDateTime } from "../../Utils/TimeUtils";
import SummaryCard from "../SummaryCard/SummaryCard";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

interface SummaryCardMapping {
  content: Map<string, string>;
  contentRaw: string;
  timestamp: string;
  header: string;
}

function renderCard(index: number, card: SummaryCardMapping): JSX.Element {
  const formattedTimestamp = card.timestamp ? FormatDateTime(card.timestamp) : "";
  console.info("Formatted Date: ", formattedTimestamp);

  return <SummaryCard key={index} content={card.content} contentRaw={card.contentRaw} timestamp={formattedTimestamp} />;
}

const AssistantPanel = (props: any): any => {
  const summariesEndRef = useRef<null | HTMLDivElement>(null);
  const { grpcData } = useSelector((state: RootState) => state.VASummary);
  // const grpcData = useMemo(() => {
  //   return {
  //     summary: {
  //       call_reason: "Customer Inquiry",
  //       hand_off_reason: "Escalation to Supervisor",
  //       details: "*Issue with billing\n*Requested refund\n*Account update needed"
  //     },
  //     interactionDateTime: "23/Apr/2023:11:42:35"
  //   };
  // }, []);

  const [summaryCards, setSummaryCards] = useState<SummaryCardMapping[]>([]);

  useEffect(() => {
    // when the summaryCards change, scroll to the bottom
    // adding a slight delay to this as it doesn't always work on first render otherwise
    console.info("Summary Cards: ", summaryCards);
    setTimeout(() => {
      if (summariesEndRef.current && summaryCards.length > 0) {
        summariesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, 0.1);
  }, [summaryCards]);

  //#region  GRPC Data VA Summary
  useEffect(() => {
    console.info("GRPC Data is", grpcData);

    const content = new Map<string, string>();
    let timestamp = "";
    const header = "Here's the virtual agent transfer summary";
    let contentRaw = "";
    const summary = grpcData?.summary;

    if (summary) {
      console.info("grpc data.summary is present", grpcData);

      if (summary.call_reason && summary.call_reason !== null && summary.call_reason !== "") {
        content.set("Contact Reason:", summary.call_reason);
        contentRaw += summary.call_reason;
      }
      if (summary.hand_off_reason && summary.hand_off_reason !== null && summary.hand_off_reason !== "") {
        content.set("Handoff Reason:", summary.hand_off_reason);
        contentRaw += summary.hand_off_reason;
      }

      if (summary.details && summary.details !== null && summary.details !== "") {
        contentRaw += summary.details;
        const safeText = contentRaw.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        content.set(
          "Details:",
          "<ul style = \"padding-inline-start: 1.5em;\">" +
            safeText
              .split("*")
              .slice(1)
              .map(
                (item) =>
                  `<li>${item
                    .split("\n")
                    .slice()
                    .map((i) => `${i}<br />`)
                    .join("")} </li>`
              )
              .join("") +
            "</ul>"
        );
      }
      console.info("content is", content);
    } else {
      console.info("data.summary isnt present", grpcData);
    }

    // Combine the parts into a formatted datetime
    if (grpcData?.interactionDateTime) timestamp = grpcData?.interactionDateTime;

    console.info("Formatted Date: ", timestamp);

    if (summary?.hand_off_reason || summary?.details || summary?.call_reason) {
      console.info("Summary is available", summary.call_reason);
      setSummaryCards((prevSummaryCards) => [
        ...prevSummaryCards,
        {
          content: content ?? "",
          contentRaw: contentRaw ?? "",
          timestamp: timestamp ?? "",
          header: header ?? "",
        }
      ]);
    } else console.info("Summary Not available", content);
  }, [grpcData]);
  // #endregion

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "auto"
      }}
    >
      {summaryCards.length > 0 ? (
        <div
          style={{
            marginTop: "auto"
          }}
        >
          {summaryCards.map((card, index) => (
            <div key={index} style={{ flex: 1, display: "flex", flexDirection: "column" }}>

              {card.header && <AssistantPanelHeader header={card.header} />}

              <div
                style={{
                  paddingLeft: "10px",
                  paddingBottom: "10px",
                  paddingRight: "10px"
                }}
              >
                {renderCard(index, card)}
              </div>
            </div>
          ))}
          <div ref={summariesEndRef}></div>
        </div>
      ) : (
        <span style={{ width: "100%", margin: "20px" }}>No summary available</span>
      )}
    </div>
  );
};

export default AssistantPanel;
