import "./App.scss";
import Preview from "./components/Preview/Preview";
import Searchbar from "./components/Searchbar/Search";
import Sidebar from "./components/Sidebar/Sidebar";
import { Store, useItemsListStore } from "./zustand/store";

function App() {
  const selectedItem = useItemsListStore((state: Store) => state.selectedItem);
  return (
    <div className="content">
      <Searchbar />
      {selectedItem && <Preview selectedItem={selectedItem} />}
      {!selectedItem && <Sidebar />}
    </div>
  );
}

export default App;
