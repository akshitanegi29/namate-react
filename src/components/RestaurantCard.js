import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, cloudinaryImageId, slaString } =
    props?.restData?.info;
  return (
    <div className="w-[250px] h-[450px] flex-wrap m-2 p-2 bg-gray-100 hover:bg-gray-300">
      <img className="w-[100%] rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="font-extralight">{avgRating}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
