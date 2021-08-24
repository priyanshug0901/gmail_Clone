// import gmailData from "../../email.json";
// const initialState = {
//   email: gmailData,
//   starredData: [],
// };
const starredReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      let id = action.id;
      console.log("id  ",id);
      let starred=[...state,id]
     
      return starred;
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
      let unstate=[...state]
   
    // if(unstate.length===1){
    //   return [];
    // }
      return unstate;

    default:
      return state;
  }
};

export default starredReducer;
