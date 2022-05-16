import { createSlice } from "@reduxjs/toolkit";

interface ListItem {
  title: string;
}

interface ItemsState {
  items: ListItem[];
}

const initialState: ItemsState = { items: [] };

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state) {
      console.log("addItem");
      state.items.push({ title: `Item ${state.items.length}` });
    },
  },
});

export const { addItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
