const sentReducer = (state = [], action) => {
  switch (action.type) {
    case "SEND":
      const mail = {
        id: action.id,
        company_Name: action.sender,
        description: action.subject,
        body: action.description,
        time: action.time,
      };
      console.log(mail);
      state.push(mail);
      return state;
    default:
      return state;
  }
};

export default sentReducer;
