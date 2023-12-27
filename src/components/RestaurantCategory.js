import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({data}) => {

    const [showIitems, setShowItems] = useState(false)
    const handleClick = () => {
        setShowItems(!showIitems)
    }
    return(
        <div className="w-6/12 mx-auto my-4 py-2 bg-gray-100 shadow-lg cursor-pointer" onClick={handleClick}>
            <h1 className="font-bold w-full">{data.title + "(" + data.itemCards.length + ")"} 
            <span className="float-right pr-2">{showIitems ? '🔼' : '🔽'}</span>
            </h1>
            {showIitems && <ItemsList items = {data.itemCards}></ItemsList>}
        </div>
    )
}

export default RestaurantCategory;