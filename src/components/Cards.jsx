import React, { useState, useEffect } from "react";
import Notify from "./Notify";
function Cards(props) {
  const [prod, setProd] = useState([]);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    let products = [
      { name: "Rice", description: "1kg bag of basmati rice", price: "200" },
      {
        name: "Wheat Flour",
        description: "2kg packet of whole wheat flour",
        price: "300",
      },
      { name: "Sugar", description: "1kg granulated sugar", price: "150" },
      { name: "Salt", description: "1kg iodized salt", price: "30" },
      {
        name: "Cooking Oil",
        description: "1-liter bottle of sunflower oil",
        price: "250",
      },
      { name: "Milk", description: "1-liter full cream milk", price: "60" },
      { name: "Eggs", description: "Pack of 12 fresh eggs", price: "150" },
      { name: "Butter", description: "200g unsalted butter", price: "100" },
      {
        name: "Cheese",
        description: "500g block of cheddar cheese",
        price: "400",
      },
      { name: "Bread", description: "400g loaf of white bread", price: "50" },
      { name: "Tea", description: "500g packet of black tea", price: "200" },
      {
        name: "Coffee",
        description: "200g jar of instant coffee",
        price: "350",
      },
      { name: "Pasta", description: "500g packet of spaghetti", price: "120" },
      {
        name: "Tomato Sauce",
        description: "500g jar of tomato sauce",
        price: "100",
      },
      {
        name: "Potatoes",
        description: "5kg bag of fresh potatoes",
        price: "250",
      },
      { name: "Onions", description: "2kg bag of red onions", price: "100" },
      { name: "Apples", description: "1kg of fresh apples", price: "150" },
      { name: "Bananas", description: "1 dozen ripe bananas", price: "80" },
      { name: "Carrots", description: "1kg of fresh carrots", price: "60" },
      {
        name: "Chicken",
        description: "1kg of fresh chicken meat",
        price: "400",
      },
      { name: "Fish", description: "1kg of fresh fish", price: "500" },
      {
        name: "Lentils",
        description: "1kg packet of red lentils",
        price: "180",
      },
      {
        name: "Cereal",
        description: "500g box of breakfast cereal",
        price: "300",
      },
      { name: "Yogurt", description: "500ml plain yogurt", price: "50" },
      { name: "Soap", description: "100g bar of bathing soap", price: "40" },
      {
        name: "Toothpaste",
        description: "100g tube of toothpaste",
        price: "70",
      },
      { name: "Shampoo", description: "200ml bottle of shampoo", price: "150" },
      {
        name: "Detergent",
        description: "1kg packet of washing powder",
        price: "250",
      },
      { name: "Biscuits", description: "300g packet of biscuits", price: "50" },
      {
        name: "Chocolates",
        description: "100g milk chocolate bar",
        price: "80",
      },
    ];
    setProd(products);
  }, []);

  const cartUpdating = () => {
    props.setCart(props.cart + 1);
    setNotify(!notify);
    setTimeout(() => {
      setNotify(false);
    }, 1000);
    console.log(props.cart);
  };
  return (
    <>
      <Notify notify={notify} />
      <div className="flex justify-center m-10 gap-5  flex-wrap h-full pb-10  ">
        {prod.map((product, index) => (
          <div
            key={index}
            className="border p-5 rounded-lg flex flex-col gap-y-3 items-center w-56 hover:bg-gradient-to-r from-slate-800 via-slate-600/25 to-slate-800 hover:shadow-lg"
          >
            <h2 className="text-center">{product.name}</h2>
            <p className="text-center">{product.description}</p>
            <p className="text-center">Price: Rs.{product.price}</p>
            <div className="mt-auto">
              <button
                className="bg-orange-500 p-1 px-4 rounded-lg text-white w-fit hover:bg-orange-500/85"
                onClick={cartUpdating}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
