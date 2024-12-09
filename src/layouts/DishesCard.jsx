import { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import qr from "../assets/img/QR.jpeg";

const DishesCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const MyAlert = () => {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postcode = document.getElementById("postcode").value;
    const items = document.getElementById("items").value;
    const phone = document.getElementById("phone").value;

    if (name === "" || address === "" || city === "" || postcode === "" || items === "" || phone === "") {
        alert("Please fill the form correctly");
    } else {
        alert("Thanks for your order, it will be delivered soon!");
    }
};


  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg  bg-gray-300">
      <img className="rounded-xl" src={props.img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>

        <div className="flex flex-row justify-center">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
        </div>

        <div>
          <button
            className="px-6 py-1 mx-16 ml-24 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
            onClick={toggleModal}
          >
            Order Now
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
              <div className="max-w-lg mx-auto mt-8 px-4 md:px-0">
                <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input type="text" name="address" id="address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                      <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">House no.</label>
                      <input type="text" name="postcode" id="postcode" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="items" className="block text-sm font-medium text-gray-700">Ordered items</label>
                    <input type="text" name="items" id="items" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="text" name="phone" id="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" required />
                  </div>
                  <div className="space-y-4">
                <label htmlFor="cod" className="flex items-center cursor-pointer">
                    <input type="radio" id="cod" name="paymentMethod" value="COD" className="form-radio" checked />
                    <span className="ml-2">Cash on Delivery (COD)</span>
                </label>
                <label htmlFor="gpay" className="flex items-center cursor-pointer">
                    <input type="radio" id="gpay" name="paymentMethod" value="gPay" className="form-radio" />
                    <span className="ml-2">Google Pay (gPay)</span>
                </label>
            </div>
            
            <div className="mt-4 flex justify-center items-center">
                <img src={qr} alt="QR Code" className="w-32 h-32" />
            </div>
            
            <div className="mt-4">
                <label htmlFor="codInput" className="block text-sm font-medium text-gray-700">Enter COD Code:</label>
                <input type="text" id="codInput" name="codInput" className="mt-1 p-2 block w-full rounded-md shadow-sm
                    focus:ring-blue-500 focus:border-blue-500 border-gray-300" />
            </div>
                  <button
                    className="px-4 py-2 bg-brightColor text-white rounded-md hover:bg-opacity-80"
                    onClick={() => {toggleModal(); MyAlert();}}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DishesCard;
