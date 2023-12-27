import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
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
  console.log(categories);
  const itemCards =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards;

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold m-2 p-2">{name}</h1>
        <p className="text-gray-500">
          {cuisines.join(", ") + " | " + costForTwoMessage}
        </p>
        {categories.map((category) => (
          <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
