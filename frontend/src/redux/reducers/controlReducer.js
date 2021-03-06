import {
  SET_INTERVAL,
  SET_TIME,
  START_ROUND,
  SET_AFTER_ROUND,
  SET_TIMER_INTERVAL
} from "../actions/types";

const initialState = {
  playerListInterval: -1,
  playerListIntervalStarted: false,
  timeIsStopped: false,
  roundStarted: false,
  isAfterRound: false,
  timerInterval: -1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_INTERVAL:
      return {
        ...state,
        playerListInterval: action.payload.playerListInterval,
        playerListIntervalStarted: action.payload.playerListIntervalStarted
      };
    case SET_TIMER_INTERVAL:
      return {
        ...state,
        timerInterval: action.payload.timerInterval
      };
    case SET_AFTER_ROUND:
      return {
        ...state,
        isAfterRound: action.payload.isAfterRound
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
