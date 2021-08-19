export const searchResult = (searchData) => {
  return {
    type: "SEARCH",
    text: searchData
  };
};
export const dataReset = () => {
  return {
    type: "EMPTY"
  };
};

export function deleteMail(id) {
  return {
    type: "deleteMail",
    id
  };
}

export function deleteMultiple(arr){
  return{
    type:"deleteMultiple",
    arr,
  }
}
