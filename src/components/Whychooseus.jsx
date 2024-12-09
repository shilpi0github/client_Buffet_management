import React, { useState } from "react";

import whya from "../assets/img/ic2.png";
import payw from "../assets/img/ic3.png";
// import opt from "../assets/img/opt.png";
import opt2 from "../assets/img/ic4.jpg";
import green from "../assets/img/ic5.png";
import green3 from "../assets/img/ic6.png";
import green4 from "../assets/img/ic7.png";

import tw from "../assets/img/tw.png";
const WhyChooseus = () => {
  return (
    <>
    <div className="bg-gray-100">
      <h2 className="text-4xl tracking-tight font-bold text-primary-800 text-center mt-40">
        Why Choose <span className="text-orange-500">Us?</span>
      </h2>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <p className="text-xl tracking-tight text-center mt-4">
              We are Royalties Buffet, and there are numerous reasons to choose
              us. We are the fastest-growing buffet in our area, and we care
              about your budget and time. Our environment is friendly with
              amazing waiters.
            </p>
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-8 col-sm-10 text-center">
                {/* <img
                  src={whya}
                  alt="im"
                  className="img-fluid mx-auto d-block h-40 w-40"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-20 py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10"></div>

        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            {/* <img className="h-40 w-40" src="/logo.png" alt="" /> */}
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-orange-500">
                  Dynamic Enviorment:
                </h3>
                <img src={green} alt="tw" className=" h-40 w-40"></img>
                <p className="text-sm">
                  Upon entering the buffet, customers could be greeted with
                  personalized menu suggestions based on their past dining
                  history or preferences. For example, if a customer has
                  previously enjoyed vegetarian dishes, the system could
                  recommend similar options. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Aperiam voluptatibus pariatur
                  deleniti minus assumenda similique repudiandae optio rem aut
                  exercitationem.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-orange-500">
                  We serve all:
                </h3>
                <img src={opt2} alt="tw" className=" h-40 w-40"></img>
                <p className="text-sm">
                  At Royalties buffet all there is someting for all we greatly
                  care about your pocket Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Cumque commodi delectus iure vero, sapiente
                  nisi pariatur eos doloremque dolorem nostrum, eum minima
                  repellendus veritatis porro possimus temporibus vel repellat
                  enim. Quasi quibusdam maiores soluta explicabo laborum
                  consequuntur expedita. Placeat maiores itaque facere amet
                  soluta, pariatur officiis quia numquam in necessitatibus?
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-orange-500">
                  24/7 Customer Support
                </h3>
                <img src={tw} alt="tw" className=" h-40 w-40"></img>
                <p className="text-sm">
                  Experience Royalties Buffet's unparalleled commitment to
                  customer satisfaction with our 24/7 support service. Whether
                  you're dining with us during the early morning hours or late
                  into the night, our dedicated support team is here to ensure
                  your experience is nothing short of exceptional. From
                  addressing any inquiries or concerns to providing
                  recommendations on our extensive menu offerings, we're
                  available around the clock to cater to your needs. Enjoy peace
                  of mind knowing that Royalties Buffet is committed to
                  delivering outstanding service whenever you choose to dine
                  with us.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-orange-500">
                  Secure Payment Processing
                </h3>
                <img src={payw} alt="payw" className=" h-40 w-40"></img>
                <p className="text-sm">
                  At Royalties Buffet, we prioritize the security of your
                  transactions. Our secure payment processing system ensures
                  that your financial information is protected at all times.
                  Whether you re paying for your meal in-person or ordering
                  online, you can trust that your payment details are encrypted
                  and safeguarded against unauthorized access. Enjoy the
                  convenience of seamless and worry-free transactions, knowing
                  that Royalties Buffet is dedicated to providing a secure
                  payment experience for all our valued customers.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-orange-500">
               Your Goods Our Responsibility
                </h3>
                <img src={green3} alt="tw" className=" h-40 w-40"></img>
                <p className="text-sm">
                  Experience Royalties Buffet's unparalleled commitment to
                  customer satisfaction with our 24/7 support service. Whether
                  you're dining with us during the early morning hours or late
                  into the night, our dedicated support team is here to ensure
                  your experience is nothing short of exceptional. From
                  addressing any inquiries or concerns to providing
                  recommendations on our extensive menu offerings, we're
                  available around the clock to cater to your needs. Enjoy peace
                  of mind knowing that Royalties Buffet is committed to
                  delivering outstanding service whenever you choose to dine
                  with us.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6 text-orange-500">
            One to one Serving
                </h3>
                <img src={green4} alt="tw" className=" h-40 w-40"></img>
                <p className="text-sm">
                At Royalties buffet we serve one to one customer ur 24/7 support service. Whether
                  you're dining with us during the early morning hours or late
                  into the night, our dedicated support team is here to ensure
                  your experience is nothing short of exceptional. From
                  addressing any inquiries or concerns to providing
                  recommendations on our extensive menu offerings, we're
                  available around the clock to cater to your needs. Enjoy peace
                  of mind knowing that Royalties Buffet is committed to
                  delivering outstanding service whenever you choose to dine
                  with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default WhyChooseus;
