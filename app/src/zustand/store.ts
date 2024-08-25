import { create } from "zustand";

export interface Item {
  title: string;
  content: string;
}

export interface Store {
  items: Item[];
  selectedItem: Item | null;
  keyword: string;
  setSelectedItem: (item: Item) => void;
  clearSelectedItem: () => void;
  search: (keyword: string) => void;
}

const items = [
  {
    title: "This is an item",
    content: "lorem ipsum dolor sit amet",
  },
  {
    title: "This is the second item",
    content: "lorem ipsum dolor sit amet",
  },
  {
    title: "Am I the third item?",
    content: "lorem ipsum dolor sit amet",
  },
  {
    title: "Fourth item here",
    content: "consectetur adipiscing elit",
  },
  {
    title: "Fifth item in the list",
    content: "sed do eiusmod tempor incididunt",
  },
  {
    title: "Sixth item, still going",
    content: "ut labore et dolore magna aliqua",
  },
  {
    title: "Seventh item, almost there",
    content: "Ut enim ad minim veniam",
  },
  {
    title: "Eighth item, keep it up",
    content: "quis nostrud exercitation ullamco",
  },
  {
    title: "Ninth item, getting closer",
    content: "laboris nisi ut aliquip ex ea commodo",
  },
  {
    title: "Tenth item, halfway there",
    content: "consequat. Duis aute irure dolor",
  },
  {
    title: "Eleventh item, keep pushing",
    content: "in reprehenderit in voluptate velit",
  },
  {
    title: "Twelfth item, almost done",
    content: "esse cillum dolore eu fugiat nulla",
  },
  {
    title: "Thirteenth item, stay strong",
    content: "pariatur. Excepteur sint occaecat",
  },
  {
    title: "Fourteenth item, you got this",
    content: "cupidatat non proident",
  },
  {
    title: "Fifteenth item, nearly there",
    content: "sunt in culpa qui officia deserunt",
  },
  {
    title: "Sixteenth item, keep going",
    content: "mollit anim id est laborum",
  },
  {
    title: "Seventeenth item, almost there",
    content: "Sed ut perspiciatis unde omnis",
  },
  {
    title: "Eighteenth item, so close",
    content: "iste natus error sit voluptatem",
  },
  {
    title: "Nineteenth item, just a bit more",
    content: "accusantium doloremque laudantium",
  },
  {
    title: "Twentieth item, you made it",
    content: "totam rem aperiam",
  },
];

const fakeGetApiCall = () => {
  return items;
};

export const useItemsListStore = create<Store>((set) => ({
  items,
  selectedItem: null,
  keyword: "",
  setSelectedItem: (item: Item) => {
    set(() => ({ selectedItem: item }));
  },
  clearSelectedItem: () => {
    set(() => ({ selectedItem: null }));
  },
  search: (keyword: string) => {
    const items = fakeGetApiCall().filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    set(() => ({ items, keyword }));
  },
}));
