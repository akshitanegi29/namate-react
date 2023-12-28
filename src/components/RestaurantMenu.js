import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(1);

  const { resId } = useParams();
  //CUSTOM HOOK
  const restInfo = useRestaurantMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const { avgRating, costForTwoMessage, name, id, cuisines } =
    restInfo?.data?.cards[0]?.card?.card?.info;

  const categories =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold m-2 p-2">{name}</h1>
        <p className="text-gray-500">
          {cuisines.join(", ") + " | " + costForTwoMessage}
        </p>
        {categories.map((category, index) => (
          //CONTROLLED COMPONENT
          <RestaurantCategory 
          key={category?.card?.card?.title} 
          data={category?.card?.card} 
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
