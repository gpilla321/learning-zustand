import { Item, useItemsListStore } from "../../zustand/store";
import "./preview.scss";

interface IProps {
  selectedItem: Item;
}

const Preview = ({ selectedItem }: IProps) => {
  const { title, content } = selectedItem;
  const clearSelectedItem = useItemsListStore(
    (state) => state.clearSelectedItem
  );
  return (
    <>
      <div className="preview__header">
        <div className="preview__close">
          <span onClick={clearSelectedItem}>x</span>
        </div>
      </div>
      <div className="preview__wrapper">
        <div className="preview__image">
          <span role="img" aria-label="preview">
            150x150
          </span>
        </div>
        <div className="preview__content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default Preview;
