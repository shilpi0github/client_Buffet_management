import React from "react";
import Button from "../layouts/Button";
import "./home.css"

const Home = () => {
 
  return (
    <>
    

    <div className="trying">
       <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/home1.avif')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
      <h1 className="homecon font-semibold text-6xl text-orange-500 md:text-4xl lg:text-5xl xl:text-6xl">
 Dive into foody world with taste! 
</h1>


        <p className="text-white font-4xl font-bold">
         This zone is only for foody lover , we care your pocket with hunger.Good foods are the way to be healthy and fit. Our foods are well tested and maintained by experince chefs. Our chef are well experinced in thier respective field.We have a number of especialist chef from all over the world. Our African and Indian dishes holds rank 1 in our area 
        </p>
       
      </div>
      
    </div>
    </div>
    
    </>
    
  );
};

export default Home;