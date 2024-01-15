import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  //   console.log(data);
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // showItems ? setShowItems(false) : setShowItems(true);
    setShowItems(!showItems);
  };

  return (
    <div>
      {/* {Header} */}
      <div
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 hover:cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
