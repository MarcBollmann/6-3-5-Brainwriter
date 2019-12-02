import { SET_INTERVAL, SET_TIME, START_ROUND } from "../actions/types";

const initialState = {
  playerListInterval: -1,
  playerListIntervalStarted: false,
  timeIsStopped: false,
  roundStarted: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_INTERVAL:
      return {
        ...state,
        playerListInterval: action.payload.playerListInterval,
        playerListIntervalStarted: action.payload.playerListIntervalStarted
      };
    case SET_TIME:
      return {
        ...state,
        timeIsStopped: action.payload.timeIsStopped
      };
    case START_ROUND:
      return {
        ...state,
        roundStarted: true
      };
    default:
      return state;
  }
}