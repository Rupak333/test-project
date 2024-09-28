// import React, { useState, useCallback, useMemo } from "react";

// // A heavy calculation function (simulating a performance-intensive task)
// const expensiveCalculation = (items) => {
//   return items.reduce((total, item) => total + item.price, 0);
// };

// const Rajan = () => {
//   const [items, setItems] = useState([
//     { id: 1, name: "Item 1", price: 100 },
//     { id: 2, name: "Item 2", price: 200 },
//   ]);

//   // useMemo to memoize the total value. It only recalculates when ⁠ items ⁠ changes.
//   const total = useMemo(() => {
//     return expensiveCalculation(items);
//   }, [items]);

//   // useCallback to memoize the addItem function, preventing re-creation on every render.
//   const addItem = useCallback(() => {
//     setItems((prevItems) => [
//       ...prevItems,
//       {
//         id: prevItems.length + 1,
//         name: ⁠ Item ${prevItems.length + 1} ⁠,
//         price: 150,
//       },
//     ]);
//   }, []);

//   return (
//     <div>
//       <h2>Item List</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//           </li>
//         ))}
//       </ul>
//       <h3>Total Price: ${total}</h3>

//       {/* Button to add a new item */}
//       <button onClick={addItem}>Add Item</button>
//     </div>
//   );
// };

// export default Rajan;

import React, { useState } from "react";

const ItemList = () => {
  // State to store items
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [newItem, setNewItem] = useState(" ");

  // Function to handle adding a new item
  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]); // Add new item to the list
      setNewItem(" "); // Clear the input field
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      {/* Input field to add new items */}
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 flex-1"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          onClick={handleAddItem}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Display list of items */}
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="mb-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
