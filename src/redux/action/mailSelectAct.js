export function addToSelected(id) {
  return {
    type: "addToSelected",
    id
  };
}

export function remFromSelected(id) {
  return {
    type: "remFromSelected",
    id
  };
}
export function emptySelected() {
  return {
    type: "emptySelected"
  };
}
