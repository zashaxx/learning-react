export default function Stats({ items }) {
  if (items.length === 0) {
    return <p className="stats">Start adding items and pack your bags! 🧳</p>;
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go! 🛫"
          : `
      you have packed ${numItems} items on your list and you are packed ${percentage}%`}
      </em>
    </footer>
  );
}
