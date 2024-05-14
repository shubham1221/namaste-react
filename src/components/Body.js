import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  // Local State Variable

  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  // Normal JS Variable
  // let listOfRestaurantsJs = [
  //   {
  //     id: "731744",
  //     name: "Southy Cafe",
  //     cloudinaryImageId: "8febdcc128f3e7be17cdf6700dcfc51b",
  //     costForTwo: "₹400 for two",
  //     cuisines: ["South Indian", "North Indian"],
  //     avgRatingString: "3.8",
  //     deliveryTime: 36,
  //   },
  //   {
  //     id: "731745",
  //     name: "Dominos",
  //     cloudinaryImageId: "8febdcc128f3e7be17cdf6700dcfc51b",
  //     costForTwo: "₹460 for two",
  //     cuisines: ["South Indian", "North Indian"],
  //     avgRatingString: "4.2",
  //     deliveryTime: 24,
  //   },
  //   {
  //     id: "731746",
  //     name: "Coffee Cafe Day",
  //     cloudinaryImageId: "8febdcc128f3e7be17cdf6700dcfc51b",
  //     costForTwo: "₹200 for two",
  //     cuisines: ["South Indian", "North Indian"],
  //     avgRatingString: "3.9",
  //     deliveryTime: 26,
  //   },
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestraunt(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.deliveryTime < 60
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Delivery with in 30 min
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
