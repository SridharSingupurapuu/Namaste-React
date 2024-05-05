import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div
      data-testid="resCard"
      // className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
      className="m-2 p-4 w-[230px]  rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        alt="res-logo"
        className="rounded-lg h-[225px]"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
