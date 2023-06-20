import { atom } from "recoil";

const toDoListState = atom({
  key: "toDoListState",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const todoStoreKey = "ToDoListState";
      const savedValue = localStorage.getItem(todoStoreKey);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(todoStoreKey)
          : localStorage.setItem(todoStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});



export {
  toDoListState,
};