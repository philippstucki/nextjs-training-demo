import { NextPage } from "next";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

////////// recoil setup

interface ListItem {
  title: string;
}

// items atom
const itemsState = atom<ListItem[]>({
  key: "items",
  default: [],
});

// length: derived state
const numItemsState = selector({
  key: "itemsLength",
  get: ({ get }) => get(itemsState).length,
});

////////// components

const ItemsOverview = () => {
  const numItems = useRecoilValue(numItemsState);
  return <div># of Items: {numItems}</div>;
};

const ItemsList = () => {
  const items = useRecoilValue(itemsState);
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item.title}</li>
      ))}
    </ul>
  );
};

const AddItem = () => {
  const itemsSetter = useSetRecoilState(itemsState);
  const addItem = () =>
    itemsSetter((items) => [...items, { title: `Item ${items.length + 1}` }]);

  return <button onClick={addItem}>Add Item</button>;
};

const ZustandPage: NextPage = () => {
  return (
    <RecoilRoot>
      <main>
        <ItemsOverview />
        <ItemsList />
        <AddItem />
      </main>
    </RecoilRoot>
  );
};

export default ZustandPage;
