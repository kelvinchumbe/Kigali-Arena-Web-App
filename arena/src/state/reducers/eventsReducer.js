import * as actiontypes from "../actions/actiontypes";

export const eventsReducer = (
  state = { events: [], error: null, isFetching: true },
  action
) => {
  switch (action.type) {
    case actiontypes.ADD_EVENTS:
      return {
        ...state,
        events: action.payload,
        isFetching: false,
      };

    case actiontypes.EVENTS_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case actiontypes.EVENTS_FETCHING:
      return {
        ...state,
        isFetching: true,
      };

    default:
      return state;
  }
};
