export const addInToSnooze = (id) => {
  return {
    type: "ADD_INTO_SNOOZE",
    id,
  };
};

export const removeIntoSnooze = (id) => {
  return {
    type: "REMOVE_INTO_SNOOZE",
    id,
  };
};
