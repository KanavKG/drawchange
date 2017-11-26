/* Action types */
export const CURRENT_ITEM = "CURRENT_ITEM";
export const UPDATE_EVENT_ARRAY = "UPDATE_EVENT_ARRAY";
export const UPDATE_VOLUNTEER_ARRAY = "UPDATE_VOLUNTEER_ARRAY";
// Volunteer values

export const VOLUNTEER_STATUS = "VOLUNTEER_STATUS";
export const CURRENT_VOLUNTEER = "CURRENT_VOLUNTEER";
// EVENT VALUES
export const EVENT_NAME = Symbol("EVENT_NAME");
export const EVENT_DATE = Symbol("EVENT_DATE");
export const EVENT_LOCATION = Symbol("EVENT_LOCATION");
export const EVENT_DESCRIPTION = Symbol("EVENT_DESCRIPTION");
export const CURRENT_EVENT = Symbol("CURRENT_EVENT");
export const CREATE_EVENT = Symbol("CREATE_EVENT");
export const EVENT_NAME_CHANGE = Symbol("EVENT_NAME_CHANGE");
export const EVENT_DATE_CHANGE = Symbol("EVENT_DATE_CHANGE");
export const EVENT_LOCATION_CHANGE = Symbol("EVENT_LOCATION_CHANGE");
export const EVENT_DESCRIPTION_CHANGE = Symbol("EVENT_DESCRIPTION_CHANGE");
export const EVENT_CONTACT_CHANGE = Symbol("EVENT_CONTACT_CHANGE");

// Authentication Action Types
export const LOGOUT = Symbol("LOGOUT");
export const LOGIN_FAILED = Symbol("LOGIN_FAILED");
export const LOGIN_SUCCESS = Symbol("LOGIN_SUCCESS");
export const REGISTRATION_FAILED = "REGISTRATION_FAILED";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";