import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchRestInfo();
  }, []);

  const { resId } = useParams();

  const [restInfo, setRestInfo] = useState(null);

  const fetchRestInfo = async () => {
    const data = await fetch(
      "https://corsproxy.io/?" + RESTAURANT_MENU_API + resId
    );
    const json = await data.json();
    console.log(json);
    setRestInfo(json);
  };

  if (restInfo === null) return <Shimmer />;

  const { avgRating, costForTwoMessage, name, id, cuisines } =
    restInfo?.data?.cards[0]?.card?.card?.info;

  const itemCards =
    restInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards;

  return (
    <div className="restaurant-menu">
      <h1 className="restaurant-name">{name}</h1>
      <p>
        {avgRating + " rating" + " | "}{" "}
        <span className="restaurant-cost"> {costForTwoMessage} </span>
      </p>
      <h4>{cuisines.join(", ")}</h4>
      <div className="menu-card">
        <h2>MENU</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}{" "}
              <span>
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
