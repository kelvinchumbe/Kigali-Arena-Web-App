import { apiUrl } from "../../utils/config";
import * as actiontypes from "./actiontypes";

export const addEvents = (events) => {
  return {
    type: actiontypes.ADD_EVENTS,
    payload: events,
  };
};

export const fetchEvents = () => (dispatch) => {
  dispatch(eventsFetching());

  return fetch(apiUrl + "events")
    .then(
      (res) => {
        if (res.ok) {
          return res.json();
        } else {
          var err = new Error("Error " + res.status + ": " + res.statusText);
          err.response = res;
          throw err;
        }
      },
      (err) => {
        var error = new Error(err.message);
        throw error;
      }
    )
    .then((events) => {
      return dispatch(addEvents(events));
    })
    .catch((error) => {
      return dispatch(eventsFailed(error));
    });
};

export const eventsFailed = (error) => {
  return {
    type: actiontypes.EVENTS_FAILED,
    payload: error,
  };
};

export const eventsFetching = () => {
  return {
    type: actiontypes.EVENTS_FETCHING,
  };
};
