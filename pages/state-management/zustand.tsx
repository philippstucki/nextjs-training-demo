import { NextPage } from "next";
import create from "zustand";

////////// zustand setup

interface ListItem {
  title: string;
}

interface ItemsState {
  items: ListItem[];
  addItem: () => void;
}

const useItemsStore = create<ItemsState>((set) => ({
  items: [],
  addItem: () =>
    set((state) => ({
      items: [...state.items, { title: `Item ${state.items.length + 1}` }],
    })),
}));

////////// components

const ItemsOverview = () => {
  const items = useItemsStore((state) => state.items);
  return <div># of Items: {items.length}</div>;
};

const ItemsList = () => {
  const items = useItemsStore((state) => state.items);

  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item.title}</li>
      ))}
    </ul>
  );
};

const AddItem = () => {
  const addItem = useItemsStore((state) => state.addItem);
  return <button onClick={addItem}>Add Item</button>;
};

const ZustandPage: NextPage = () => {
  return (
    <main>
      <ItemsOverview />
      <ItemsList />
      <AddItem />
    </main>
  );
};

export default ZustandPage;
