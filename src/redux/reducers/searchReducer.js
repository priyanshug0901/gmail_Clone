import gmailData from "../../email.json";
const searchReducer = (state = gmailData, action) => {
  switch (action.type) {
    case "SEARCH":
      console.log(action.text);
      const dupl = state;
      const sd = action.text;
      const filterDetails = dupl.filter((ser) => {
        return (
          ser.company_Name.toLocaleLowerCase().includes(sd.toLowerCase()) ||
          ser.description.toLocaleLowerCase().includes(sd.toLowerCase()) ||
          ser.time.toLocaleLowerCase().includes(sd.toLowerCase())
        );
      });
      return filterDetails;

    case "EMPTY":
      return gmailData;

    case "deleteMail":
      let mailid = action.id;
      // for (let i in state) {
      //  if (state[i].id === mailid) {
      //     console.log(i);
      //     state.splice(i, 1);
      //     break;
      //   }
      // }
      let filtered = state.filter((value) => value.id !== mailid);
      return filtered;

    case "deleteMultiple":
      let selectedMails = action.arr;
      state = state.filter((val) => !selectedMails.includes(val.id));
      action.arr = [];
      return state;
    default:
      return state;
  }
};

export default searchReducer;
