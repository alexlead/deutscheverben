export const saveArrayToLocalStorage = (item: string, arr: string[]) => {
  try {
    const serializedArray: string = JSON.stringify(arr);
    localStorage.setItem(item, serializedArray);
  } catch (e) {
    console.warn("Could not save state to localStorage", e);
  }
};

export const loadArrayFromLocalStorage = (item: string) => {
  try {
    const serializedState = localStorage.getItem(item);
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state from localStorage", e);
    return [];
  }
};


export const saveMyListStatus = (status: boolean) => {
  try {
    localStorage.setItem("mylist", status.toString());
  } catch (e) {
    console.warn("Could not save state to localStorage", e);
  }
}

export const loadMyListStatus = (): boolean => {
  try {
    const myListStatus = localStorage.getItem("mylist");
    if (myListStatus === "true") {
      return true;
    }
  } catch (e) {
    console.warn("Could not load state from localStorage", e);
  }
  return false;
}
