import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-3 w-[260px] h-[400px] rounded-lg bg-gray-100 hover:bg-orange-50">
      <img
        className="rounded-lg w-[100%] h-40 bg-auto"
        alt="res logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} Stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

// Higher order component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { sla } = resData?.info;
    return (
      <div>
        <label className="absolute bg-orange-500 text-white m-2 px-3 py-1 text-sm rounded-lg shadow-lg">
          {sla.slaString}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
