export const enum WellnessBreakResponse {
    NONE = "none",
    ACCEPT = "accept",
    REJECT = "reject",
    DISMISS = "dismiss",
    NOTIFICATION_TIMEOUT = "timeout",
    NO_RESPONSE = "no_response"
}

export const enum WellnessCardType {
    NONE = "none",
    QUESTION = "wellnessBreakQuestion",
    CTA_REQUEST = "wellnessBreakCTARequest",
    END_OF_BREAK = "endOfBreakMessage"
}

export const enum WellnessResponseSource {
    CARD,
    NOTIFICATION,
    CTA
}

export enum WellnessBreakError {
    NONE,
    CHANGE_STATE_TO_RESET_ERROR,
    CHANGE_STATE_TO_AVAILABLE_ERROR,
    GENERIC_ERROR
}

export const enum WellnessBreakMetricType {
    NONE = "none",
    BREAK_STARTED = "break_started",
    BREAK_ENDED = "break_ended",
    BREAK_WAITING_TO_START = "break_waiting_to_start",
    CARD_BREAK_ACCEPTED = "card_accepted",
    CARD_BREAK_REJECTED = "card_rejected",
    CTA_APPROVED = "CTA_approved",
    CTA_REJECTED = "CTA_rejected",
    CTA_USER_REQUEST = "CTA_user_break_requested",
    DISPLAY_CTA = "display_CTA",
    ERROR_CHANGE_STATE= "error_changing_state",
    GENERIC_ERROR= "generic_error",
    NO_RESPONSE = "no_response",
    NOTIFICATION_FIRED = "notification_fired",
    NOTIFICATION_ACCEPTED = "notification_accepted",
    NOTIFICATION_DISMISSED = "notification_dismissed",
    NOTIFICATION_REJECTED = "notification_rejected",
    NOTIFICATION_TIMEOUT = "notification_timeout",
    PROVIDE_BREAK_EVENT_RECEIVED = "provide_break_event_received"
}
