import { Item, Store, useItemsListStore } from "../../zustand/store";
import "./sidebar.scss";

const Sidebar = () => {
  const items = useItemsListStore((state: Store) => state.items);

  const setSelectedItem = useItemsListStore(
    (state: Store) => state.setSelectedItem
  );

  const handleOnClick = (item: Item) => {
    setSelectedItem(item);
  };

  return (
    <div className="sidebar__wrapper">
      {items.map((item, index) => (
        <div className="item" key={index} onClick={() => handleOnClick(item)}>
          <div className="item__image">
            <span className="item__cover">50x50</span>
          </div>
          <div className="item__content">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
