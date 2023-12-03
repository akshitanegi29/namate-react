import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, cloudinaryImageId, slaString } =
    props?.restData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-card-img" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
