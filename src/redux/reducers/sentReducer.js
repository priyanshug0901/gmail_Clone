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
     
      let newState=[...state,mail];
      return newState;

    default:
      return state;
  }
};

export default sentReducer;
