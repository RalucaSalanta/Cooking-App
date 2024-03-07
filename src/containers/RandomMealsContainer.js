import React from 'react'
import TextComponent from '../components/TextComponent'
import RandomMealComponent from '../components/RandomMealComponent'

const RandomMealsContainer = () => {
  return (
    <>
          <TextComponent text="Random Meals Area" />
        <div class="row row-cols-1 row-cols-lg-3 align-items">
          <RandomMealComponent randomMealNumber="1" text="Meal Number -" />
          <RandomMealComponent randomMealNumber="2" text="Meal Number -" />
          <RandomMealComponent randomMealNumber="3" text="Meal Number -" />
          <RandomMealComponent randomMealNumber="4" text="Meal Number -" />
          </div>
    </>
  );
};  

export default RandomMealsContainer