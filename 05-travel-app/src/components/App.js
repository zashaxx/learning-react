import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackagingList from "./PackagingList";
import  Stats  from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }

  function handleDeleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {

    const confirmed = window.confirm(
      "Are you sure you want to clear the entire list? ⚠️"
    );
    if (!confirmed) return;

    else if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}


export default App;
