import { NextPage } from "next";
import React, { useContext, useState } from "react";

interface ListItem {
  title: string;
}

const ItemsContext = React.createContext<ListItem[]>([]);

const ItemsList = () => {
  const items = useContext(ItemsContext);

  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item.title}</li>
      ))}
    </ul>
  );
};

const ItemsOverview = () => {
  const items = useContext(ItemsContext);

  return <div># of Items: {items.length}</div>;
};

const ContextApiPage: NextPage = () => {
  const [items, setItems] = useState<ListItem[]>([]);

  const addItem = () => {
    setItems((currentItems) => [
      ...currentItems,
      { title: `Item ${currentItems.length}` },
    ]);
  };

  return (
    <ItemsContext.Provider value={items}>
      <ItemsOverview />
      <ItemsList />
      <button onClick={addItem}>Add Item</button>
    </ItemsContext.Provider>
  );
};

export default ContextApiPage;
