import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import MealItemInput from "./MealItemInput";


const RestaurantMenu = () => {
const RestaurantItem = (menuItem) => {
  const dispatch=useDispatch();

const addItemHandler=(item)=>{
  dispatch(addItem(item));
}

  return (
    <div className="flex ">
    <div className="flex w-full ">
      <div className="flex pt-7">
        <img
          className="w-[120px] h-[120px] rounded-2xl"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            menuItem.imageId
          }
          alt="Avatar"
        />
        <div className="pl-6 flex flex-col">
          <h1 className="text-lg font-semibold  text-gray-600">{menuItem.name}</h1>
          <h2 className=" text-sm font-semibold text-gray-900">
            ₹ {menuItem.price ? menuItem.price / 100 : menuItem.defaultPrice / 100}
          </h2>
          <h3 className="pt-2 text-sm font-semibold text-gray-500">
            
          </h3>
        </div>
      </div>
      
    </div>
    <MealItemInput addItemHandler={addItemHandler} menuItem={menuItem}/>
    </div>
  );
};

};
export default RestaurantMenu;
