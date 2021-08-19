export const addIdIntoStarred = (id) => {
  return {
    type: "ADD",
    id,
  };
};
export const removeIdIntoStarred = (id) => {
  return {
    type: "REMOVE",
    id,
  };
};
