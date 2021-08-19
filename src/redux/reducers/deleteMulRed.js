export default function deleteMultiple(state = [], action) {
  switch (action.type) {
    case "addToDel":
      state.push(action.id);
      return state;

    default:
      return state;
  }
}
