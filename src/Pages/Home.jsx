import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const Section = ({ title, filterKey, items }) => {
  return (
    <div className="flex-shrink-0 h-full p-4 overflow-y-auto max-h-screen">
      <h1 className="text-lg font-bold mb-4">{title}</h1>
      <div className="flex flex-col space-y-4">
        {items
          .filter((item) => item.progress === filterKey)
          .map((item) => (
            <Cart key={item._id} item={item}></Cart>
          ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex p-4">
      <div>
        <h1>Incomplete</h1>
        <Section  filterKey="Incomplete" items={items} />
      </div>
      <div>
        <h1>ToDo</h1>
        <Section  filterKey="ToDo" items={items} />
      </div>
      <div>
        <h1>Doing</h1>
        <Section  filterKey="Doing" items={items} />
      </div>
      <div>
        <h1>UnderReview</h1>
        <Section filterKey="UnderReview" items={items} />
      </div>
      <div>
        <h1>Completed</h1>
        <Section  filterKey="Completed" items={items} />
      </div>
      <div>
        <h1>Overdue</h1>
        <Section  filterKey="Overdue" items={items} />
      </div>
    </div>
  );
};

export default Home;
