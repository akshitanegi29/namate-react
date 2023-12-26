import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Whenever state variable updates, React triggera a reconcialiation cycle(re-renders the component)
  console.log("Body Component Rendered!");


  //callback func of useEffect gets called after the comp has rendered
  useEffect(() => {
    fetchData();
  }, []); //To run useEffect only once on the first render pass any empty array in the dependecy

  //API call
  const fetchData = async () => {
    const restData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await restData.json();
    // Optional Chaining
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestList(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants);
  };

  const onlineStatus = useOnlineStatus()
  if (onlineStatus === false){
    return <h1>Could not connect to the internet.Please check your network.</h1>
  }

  //conditional rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between border-2 border-black m-2">
        <div className="px-4">
          <input
            className=" bg-slate-300 h-7 border-[1px] border-black m-2"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button className="serch-btn bg-red-300 rounded-lg w-28 mx-2" onClick={() => {
            //filter restauraunts on the basis of search text
            const filteredRestList = restaurantList.filter(rest => rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestList(filteredRestList)
          }}>Search</button>
        </div>
        <button
          className=" bg-red-300 rounded-lg w-48 mx-2 my-3"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (rest) => rest.info.avgRating > 4
            );
            setFilteredRestList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestList.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} restData={restaurant} />
           </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
