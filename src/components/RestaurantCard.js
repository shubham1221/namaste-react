import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    resData;
  const { deliveryTime } = resData;
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId}></img>
      <h3>Restaurant Name: {name}</h3>
      <div className="card-info">
        <h4>Cuisines: {cuisines}</h4>
        <h4>Rating: {avgRatingString}</h4>
        <h4>Delivery Time: {deliveryTime} Min</h4>
        <h4>Cost For Two: {costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
