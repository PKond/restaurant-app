import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useEffect } from "react";

const CartItem = ({ item }) => {
  const [qty, setQty] = useState(1);
  const [items , setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const cartDispatch = () => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART,
      cartItems: items,
    });
  };
  

  const updateQty = (action, id) => {
    if(action == "add") {
        setQty(qty + 1)
        cartItems.map(item => {
            if(item.id === id){
                item.qty += 1;
            }
        });
        cartDispatch();
    }
  }

  useEffect(() => {
    setItems(cartItems);
  }, [qty, items]);

  return (
    <div className="w-full p-1 px-2 rounded-lg pg-cartItem flex flex-col items-center gap-2">
      <img src={item?.imageURL} className="w-16 h-16" alt="" />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-base text-gray-50 text-center">
          $ {parseFloat(item?.price) * qty}
        </p>
      </div>

      {/* button section */}
      <div
        className="group flex items-center gap-2 ml-auto cursor-pointer"
        onClick={() => updateQty("remove", item?.id)}
      >
        <motion.div whileTap={{ scale: 0.75 }}>
          <BiMinus className="text-gray-50" />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {item?.qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
