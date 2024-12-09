import React from "react";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";

const serviceLists = [
    {id:1, title: "Catering", des: "Delight your guests with our flavors and  presentation", img: icon1},
    {id:2, title: "Fast delivery", des: "We deliver your order promptly to your door with happines", img: icon2},
    {id:3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering n", img: icon3},
    {id:4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", img: icon4},
]

const OurServices = () => {
  return (
    <div className="section-container my-16 bg-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle text-5xl font-bold text-orange-500 mb-3 ml-6">Our Story & Services</p>
            <h2 className="title  text-3xl font-bold ml-6">Our Culinary Journey And Services</h2>
            <p className="my-5 text-secondary leading-[30px] text-1xl  ml-6">
              Rooted in passion, we curate unforgettable dining experiences and
              offer exceptional services, blending culinary artistry with warm
              hospitality.
            </p>

            <button className="bg-orange-500 ml-2 font-semibold btn text-white px-8 py-3 rounded-full">
              Explore
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center ">
                {
                    serviceLists.map((service) => (
                        <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border hover:border-orange-500 transition-all duration-200 bg-black ">
                            <img src={service.img} alt="" className="mx-auto" />
                            <h5 className="pt-3 font-semibold">{service.title}</h5>
                            <p className="text-[#90BD95]">{service.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
