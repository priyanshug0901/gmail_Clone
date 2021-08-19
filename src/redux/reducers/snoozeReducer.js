const snoozeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_INTO_SNOOZE":
      let id = action.id;
      state.push(id);
      return state;
    case "REMOVE_INTO_SNOOZE":
      let id1 = action.id;
      const filter = state.filter((val) => {
        return val !== id1;
      });
      return filter;
    default:
      return state;
  }
};

export default snoozeReducer;
