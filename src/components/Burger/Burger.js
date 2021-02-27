import React from "react";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = (props) => {
  const ingredientkeys = Object.keys(props.ingredients);

  let burgerIngredient = ingredientkeys
    .map((ingredientkey) => {
      return [...Array(props.ingredients[ingredientkey])].map((_, index) => {
        return (
          <BurgerIngredient type={ingredientkey} key={ingredientkey + index} />
        );
      });
    })
    .reduce((prev, cur) => {
      return prev.concat(cur);
    }, []);

  if (burgerIngredient.length === 0) {
    burgerIngredient = <p>Please Add Ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {burgerIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
