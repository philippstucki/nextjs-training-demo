import { NextPage } from "next";
import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from "./hooks";
import { addItem } from "./itemsSlice";
import { itemsStore } from "./store";

const ItemsOverview = () => {
  const items = useAppSelector((state) => state.items.items);

  return <div># of Items: {items.length}</div>;
};

const ItemsList = () => {
  const items = useAppSelector((state) => state.items.items);

  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item.title}</li>
      ))}
    </ul>
  );
};

const AddItem = () => {
  const dispatch = useAppDispatch();
  return <button onClick={() => dispatch(addItem())}>Add Item</button>;
};

const ContextApiPage: NextPage = () => {
  return (
    <Provider store={itemsStore}>
      <main>
        <ItemsOverview />
        <ItemsList />
        <AddItem />
      </main>
    </Provider>
  );
};

export default ContextApiPage;
