export default function mailSelectRed(state = [], action) {
  switch (action.type) {
    case "addToSelected":
      let mailid = action.id;
      state.push(mailid);
      console.log(state);
      return state;

    case "remFromSelected":
      let mailId = action.id;
      state = state.filter((val) => val !== mailId);
      console.log(state);
      return state;

    case "emptySelected":
      console.log(state);
      return [];

    default:
      return state;
  }
}
