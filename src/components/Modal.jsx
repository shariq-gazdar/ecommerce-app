import React, { useState } from "react";

function Modal({
  onClose,
  name,
  description,
  image,
  price,
  user,
  cart,
  setCart,
}) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    setQuantity((prev) => (type === "+" ? prev + 1 : Math.max(1, prev - 1)));
  };

  const handleAddCart = () => {
    if (!user) {
      alert("Please log in to add items to the cart.");
      return;
    }

    // Retrieve existing cart or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem(user)) || [];

    // Check if the item already exists in the cart
    const itemIndex = existingCart.findIndex((item) => item.name === name);

    if (itemIndex > -1) {
      // Update quantity if item exists
      existingCart[itemIndex].quantity += quantity;
    } else {
      // Add new item
      existingCart.push({ name, price, quantity });
    }

    // Save back to localStorage
    localStorage.setItem(user, JSON.stringify(existingCart));
    setCart(cart + 1);
    onClose(false);
    console.log("Updated Cart:", existingCart);
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/50"
      onClick={() => onClose(false)}
    >
      <div
        className="bg-white p-4 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={() => onClose(false)}
        >
          ❌
        </button>

        {/* Modal Content */}
        <div className="flex items-start gap-4">
          <img src={image} alt={name} className="w-32 h-40 object-fill" />
          <div>
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-sm text-gray-600">{description}</p>

            {/* Quantity Selector */}
            <div className="mt-3 flex items-center border w-fit rounded">
              <button
                className={`px-3 py-1 ${
                  quantity === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleQuantity("-")}
                disabled={quantity === 1}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 py-1 hover:bg-gray-200"
                onClick={() => handleQuantity("+")}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="bg-orange-500 hover:bg-orange-600 p-2 my-2 rounded-lg text-white font-semibold w-full"
              onClick={handleAddCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
