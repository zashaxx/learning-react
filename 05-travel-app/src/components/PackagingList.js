import { useState } from "react";
import { Item } from "./Item.js";

export default function PackagingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort()
      .filter((item) => item.packed);
  } else if (sortBy === "input") {
    sortedItems = items;
  } else if (sortBy === "unpacked") {
    sortedItems = items
      .slice()
      .sort()
      .filter((item) => !item.packed);
  } else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="description">By Description</option>
          <option value="packed">By Packed</option>
          <option value="unpacked">By Unpacked</option>
          <option value="input">By Input Order</option>
        </select>

        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
