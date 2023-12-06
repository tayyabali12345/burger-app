import React, { useState } from "react";
import BurgerItem from "./BurgerItem";
import { useNavigate } from 'react-router-dom'
import "./Burger.css";

export default function Burger() {
  const navigate = useNavigate();
  const initialState = {
    lettuce: { price: 0.5, quantity: 0 },
    bacon: { price: 0.4, quantity: 0 },
    cheese: { price: 1.3, quantity: 0 },
    meat: { price: 0.7, quantity: 0 },
  };

  const [burger, setBurger] = useState(initialState);

  const [price, setPrice] = useState(3);

  const handleIncrease = (ingredient) => {
    setPrice(burger[ingredient].price + price);
    setBurger((prevBurger) => ({
      ...prevBurger,
      [ingredient]: {
        ...prevBurger[ingredient],
        quantity: prevBurger[ingredient].quantity + 1,
      },
    }));
  };

  const handleDecrease = (ingredient) => {
    setPrice(price - burger[ingredient].price);
    setBurger((prevBurger) => {
      const updatedQuantity = Math.max(0, prevBurger[ingredient].quantity - 1);
      return {
        ...prevBurger,
        [ingredient]: {
          ...prevBurger[ingredient],
          quantity: updatedQuantity,
        },
      };
    });
  };

  const resetState = function () {
    setBurger(initialState);
    setPrice(3);
    navigate("/signup");
  };

  return (
    <div className="center">
      <div className="bread-top"></div>

      {burger === initialState ? (
        <p className="para">No ingredients present</p>
      ) : (
        <BurgerItem items={burger} />
      )}

      <div className="bread-bottom"></div>

      <div className="ingredients">
        <p className="para">Current price: {price}$</p>
        <div className="cen-row">
          {Object.keys(burger).map((ingredient) => (
            <div key={ingredient} className="ingredient-row">
              <p className="ingr">{ingredient}</p>
              <button
                className="decreasebtn"
                onClick={() => handleDecrease(ingredient)}
                disabled={burger[ingredient].quantity === 0}
              >
                LESS
              </button>
              <button onClick={() => handleIncrease(ingredient)}>MORE</button>
            </div>
          ))}
          <button onClick={() => resetState()}>Sign up for order</button>
        </div>
      </div>
    </div>
  );
}
