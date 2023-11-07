import { useState, useEffect } from "react";
import { RestaurantData } from "../config";
import { useParams } from "react-router-dom";
import ShowContent from "./showContent";

const Body = () => {
  const [cart, setCart] = useState(15);
  const [restaurantTop, setRestaurantTop] = useState(null);
  const [menuRestaurant, setMenuRestaurant] = useState([]);
  

  useEffect(() => {
    try {
      getRestaurantInfo() 
        .then(response => {
          // handle the response here
        })
        .catch(error => {
          console.error(error);3
          // handle the error here
          console.log(RestaurantData);
      const data = RestaurantData[417201]?.data;
      console.log("data")
    console.log(data);
    console.log(417201)
    const menuItems =
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log(menuItems);
    setMenuRestaurant(menuItems);
    setRestaurantTop(data);

        });
    } catch (error) {
      console.log(RestaurantData);
      const data = RestaurantData[417201]?.data;
      console.log("data")
    console.log(data);
    console.log(417201)
    const menuItems =
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log(menuItems);
    setMenuRestaurant(menuItems);
    setRestaurantTop(data);
    }
    
  }, []);

  async function getRestaurantInfo() {
    // let response = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=417201" 
      
    // );
    // const json = await response.json();
    // console.log("json")
    // console.log(json)
    // const data = json?.data;
    // console.log(data);
    const menuItems =
      data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    // console.log(menuItems);
    setMenuRestaurant(menuItems);
    setRestaurantTop(data);
    // info : res_data.data.cards[0].card.card.info,
    // console.log("eh")
    // console.log(data?.cards[0]?.card?.card?.info);
    // console.log(menuRestaurant);
  }
  const { id } = useParams();
  return (
    
    
    <div>
      <div className="flex bg-[#171717]">
        <img
          className=" w-[300px] ml-[200px] p-[10px] rounded-3xl    sm:w-[300px] sm:ml-[200px] sm:p-[10px] sm:rounded-3xl"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurantTop?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="Avatar"
        />
        <div>
          <h1 className=" text-4xl text-white ml-[25px] pt-10">
            {restaurantTop?.cards[0]?.card?.card?.info?.name}
          </h1>
          <h4 className=" text-sm text-white ml-[25px] pt-4">
            {restaurantTop?.cards[0]?.card?.card?.info?.cuisines?.join(",")}
          </h4>
          <div className="flex">
            <h4 className=" text-sm text-white ml-[25px] pt-4">
              {restaurantTop?.cards[0]?.card?.card?.info?.avgRating} Stars
            </h4>
            <h4 className=" text-sm text-white ml-[25px] pt-4">
              {restaurantTop?.cards[0]?.card?.card?.info?.sla?.minDeliveryTime}{" "}
              MINS
            </h4>
            <h4 className=" text-sm  text-white ml-[25px] pt-4">
              {restaurantTop?.cards[0]?.card?.card?.info?.totalRatingsString}
            </h4>
          </div>
        </div>
    
        {/* {console.log(restaurantTop?.cards[0]?.card?.card)} */}
      </div>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700" />


      {console.log(menuRestaurant)}
      
      {/* {menuRestaurant?.map((menu) => (<ShowContent menu={menu} />))} */}
      
      {menuRestaurant?.slice(1,4 ).map((menu, index) => (
  <ShowContent key={index} menu={menu} />
))}
      
     </div>
    // </div>
    // </div>
  );

  };

export default Body;
