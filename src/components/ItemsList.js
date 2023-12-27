import { CDN_URL } from "../../utils/constants";
const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex p-2 m-2 border-b-[1px] border-gray-300"
        >
          <div className="w-9/12">
            <span>{item.card.info.name}</span>
            <span className="mr-2 italic">
               - Rs.{" "}
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </span>

            <p className="font-thin text-xs italic">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="bg-black text-white rounded-md w-14">
                Add +
              </button>
            </div>
            <img
              className="w-full"
              src={CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
