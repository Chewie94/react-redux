const defaultState = {
  cash: 0,
};

const CASH_ACTION_TYPES = {
  ADD: "ADD_CASH",
  WITHDRAW: "WITHDRAW_CASH",
}
  
export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CASH_ACTION_TYPES.ADD:
      return { ...state, cash: state.cash + action.payload };
    case CASH_ACTION_TYPES.WITHDRAW:
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAction = (payload) => ({ type: CASH_ACTION_TYPES.ADD, payload });
export const withdrawCashAction = (payload) => ({ type: CASH_ACTION_TYPES.WITHDRAW, payload });