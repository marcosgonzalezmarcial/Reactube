let initialHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

const HISTORY_TYPES = {
  ADD_SEARCHTERM: "ADD_SEARCHTERM",
};

const historyReducer = (state, action) => {
  switch (action.type) {
    case HISTORY_TYPES.ADD_SEARCHTERM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export { historyReducer, initialHistory, HISTORY_TYPES };
