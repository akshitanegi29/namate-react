import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await restData.json();
    // Optional Chaining
    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestList(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants);
  };

  //conditional rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button className="serch-btn" onClick={() => {
            //filter restauraunts on the basis of search text
            const filteredRestList = restaurantList.filter(rest => rest.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestList(filteredRestList)
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
