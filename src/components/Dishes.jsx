import React, { useState } from "react";
import biryani from "../assets/img/biryani.jpg";
import maggi from "../assets/img/maggi.jpg";
import daalchawal from "../assets/img/daalchawal.jpg";
import Chicken from "../assets/img/Chicken.jpg";
import curry from "../assets/img/curry.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle changes in the search input
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter dishes based on the search query
  const filteredDishes = [
    { img: biryani, title: "Biryani", price: "Rs200" },
    { img: maggi, title: "Noodeles", price: "Rs120" },
    { img: maggi, title: "Maggi", price: "Rs150" },
    { img: daalchawal, title: "Daal Chawal", price: "Rs110" },
    { img: Chicken, title: "Chicken", price: "Rs100" },
    { img: curry, title: "Curry", price: "Rs190" }
  ].filter((dish) =>
    dish.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10 text-orange-500">
        Order your favourite Indian Dishes
      </h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search by dish title..."
        className="px-4 py-2 mb-8 border border-gray-300 rounded-md"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      <div className="flex flex-wrap gap-8 justify-center">
        {/* Render dishes cards */}
        {filteredDishes.map((dish, index) => (
          <DishesCard
            key={index}
            img={dish.img}
            title={dish.title}
            price={dish.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Dishes;
