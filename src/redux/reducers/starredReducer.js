// import gmailData from "../../email.json";
// const initialState = {
//   email: gmailData,
//   starredData: [],
// };
const starredReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      let id = action.id;
      console.log(id);
      state.push(id);
      //   let obj = state.email.find((val) => val.id === id);
      //   state.starredData.push(obj);
      //   console.log(state.starredData);
      console.log(state);
      return state;
    case "REMOVE":
      let id1 = action.id;
      //   let filterData = state.filter((val, i) => {
      //     return val !== id1;
      //   });
      for (let i = 0; i < state.length; i++) {
        if (id1 === state[i]) {
          state.splice(i, 1);
        }
      }

      console.log(state);
      return state;
    default:
      return state;
  }
};

export default starredReducer;
