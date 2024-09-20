export function FormatDateTime(timestamp: string): string {
  const dateTime = new Date(timestamp);

  if (isNaN(dateTime.getTime())) {
    return "Invalid input date/time";
  }

  return dateTime.toLocaleString("en-US", {
    hour: "2-digit",
    hour12: true,
    minute: "2-digit",
    timeZone: "UTC"
  });
}
