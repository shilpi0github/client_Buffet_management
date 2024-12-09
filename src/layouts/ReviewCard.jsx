import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
     <div className=""> <div>
        <p className=" text-lightText">
          This place is great! Atmosphere is chill and cool but the staff is
          also really friendly. They know what they’re doing and what they’re
          talking about, and you can tell making the customers happy is their
          main priority. Food is pretty good, some italian classics and some
          twists, and for their prices it’s 100% worth it.
        </p>
      </div>

      <div className=" flex flex-row justify-center items-center  gap-4">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
        <h3 className=" font-semibold ">{props.name}</h3>
      </div>
      </div>
    </div>
  );
};

export default ReviewCard;
