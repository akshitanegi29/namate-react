import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu"

const RestaurantMenu = () => {

  const { resId } = useParams();
  //CUSTOM HOOK
  const restInfo = useRestaurantMenu(resId)

  if (restInfo === null) return <Shimmer />;

  const { avgRating, costForTwoMessage, name, id, cuisines } =
    restInfo?.data?.cards[0]?.card?.card?.info;

  const itemCards =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards;

  return (
    <div className="restaurant-menu">
      <h1 className="restaurant-name border-b-[1px] border-[#d3d3d3]-400">{name}</h1>
      <p className="text-[#7e808c]">
        {avgRating + " rating" + " | "}{" "}
        <span className="restaurant-cost"> {costForTwoMessage} </span>
      </p>
      <h4 className="text-[#7e808c] italic font-light">{cuisines.join(", ")}</h4>
      <div className="menu-card border-t-[1px] border-[#d3d3d3]-400">
        <h2 className="px-[50%] font-bold">MENU</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id} className="py-2 border-b-[1px] border-[#d3d3d3]-400 px-0">
              {item.card.info.name}{" "}
              <span className="mr-[50%] justify-end flex">
                {" Rs."}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
