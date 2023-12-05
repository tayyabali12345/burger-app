import React from "react";
import "./Burger.css";

export default function BurgerItem(props) {
  let burgerIngredients = [];
  Object.keys(props.items).forEach((key) => {
    burgerIngredients.push(
      Array(props?.items[key]?.quantity)
        ?.fill("")
        ?.map(() => <div key={key} className={key}></div>)
    );
  });
  
  return <div className="center-text-2">{burgerIngredients}</div>;
}
