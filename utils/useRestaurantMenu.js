import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(()=>{ fetchRestInfo()
    }, [])

    const fetchRestInfo = async () => {
        const data = await fetch(RESTAURANT_MENU_API + resId)
        const json = await data.json();
        setRestInfo(json);
    }
    return restInfo;
 }

export default useRestaurantMenu;