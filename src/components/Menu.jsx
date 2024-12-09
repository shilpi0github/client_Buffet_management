import { useState } from "react";
import DishesCard from "../layouts/DishesCard";
import corn from "../assets/img/corn.jpg";
import paneer from "../assets/img/paneer.jpg";
import biryani from "../assets/img/biryani.jpg";
import burger from"../assets/img/burger.png"
// import burger1 from"../assets/img/burger1.png"
import burger2 from"../assets/img/burger2.png"
import burger3 from"../assets/img/burger3.png"
import burger4 from"../assets/img/burger4.png"
import burger5 from"../assets/img/burger5.png"
import burger6 from"../assets/img/burger6.png"
// import burger7 from"../assets/img/burger7.png"


const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDishes = [
    { img: corn, title: "African Corn", price: "Rs 600" },
    { img: paneer, title: "Indian Paneer", price: "Rs 300" },
    { img: biryani, title: "Chicken Biryani", price: "Rs 600" },
    { img: burger, title: "Burger", price: "Rs 600" },
    // { img: burger1, title: "Indian Paneer", price: "Rs 300" },
    { img: burger2, title: "Chicken grilled", price: "Rs 600" },
    { img: burger3, title: "Burger and coke", price: "Rs 600" },
    { img: burger4, title:"Mix burger", price: "Rs 300" },
    { img: burger5, title: "Grilled", price: "Rs 600" },
   { img: burger6, title: "Fried Burger", price: "Rs 600" },

  ].filter((dish) =>
    dish.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredDishes.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10 text-orange-500">
        Premium Menu
      </h1>

      <div className="w-full lg:w-2/3 mb-8">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          placeholder="Search by dish title..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {currentCards.map((dish, index) => (
          <DishesCard key={index} img={dish.img} title={dish.title} price={dish.price} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex mt-4">
        {[...Array(Math.ceil(filteredDishes.length / cardsPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
