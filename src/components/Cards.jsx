import React, { useState, useEffect } from "react";
import Notify from "./Notify";
function Cards(props) {
  const [prod, setProd] = useState([]);
  const [notify, setNotify] = useState(false);
  let cartProducts = [];
  useEffect(() => {
    let products = [
      {
        name: "Rice",
        description: "1kg bag of basmati rice",
        price: "200",
        image:
          "https://media.gettyimages.com/id/872343048/photo/raw-rice-grain-and-dry-rice-plant-on-wooden-table.jpg?s=612x612&w=0&k=20&c=DgvRQtGlRoLh-lmqyjonFqDR-qNpXP5_UXVj8U1CL80=",
      },
      {
        name: "Wheat Flour",
        description: "2kg packet of whole wheat flour",
        price: "300",
        image:
          "https://media.gettyimages.com/id/480241244/photo/bowl-filled-with-wheat-flour.jpg?s=612x612&w=0&k=20&c=GfezwqMcv8sfHjL750Ujk_rEc-4rQB5fpM2MRTizTi0=",
      },
      {
        name: "Sugar",
        description: "1kg granulated sugar",
        price: "150",
        image:
          "https://media.gettyimages.com/id/1330742778/photo/natural-seasoning-organic-sea-small-and-large-white-salt-in-a-spoon-in-a-cup-in-a-salt-shaker.jpg?s=612x612&w=0&k=20&c=alNS1WyUa6LwNUYnFfeHg0iPm17UK1Wx3rFriV0Og_8=",
      },
      {
        name: "Salt",
        description: "1kg iodized salt",
        price: "30",
        image:
          "https://media.gettyimages.com/id/1387705673/vector/salt-packet-icon-flat-design.jpg?s=612x612&w=0&k=20&c=9SILWCrzTw7Y0-qbGX4mGwsdqxEOYT3cS_DsbMNHSxs=",
      },
      {
        name: "Cooking Oil",
        description: "1-liter bottle of sunflower oil",
        price: "250",
        image:
          "https://media.gettyimages.com/id/86056132/photo/bottle-of-olive-oil-with-olives.jpg?s=612x612&w=0&k=20&c=0sMyuEhR-66qKSK6DkMFpj2hR-Bn_oStr-SjIV_3wPA=",
      },
      {
        name: "Milk",
        description: "1-liter full cream milk",
        price: "60",
        image:
          "https://media.gettyimages.com/id/183778031/photo/milk-bottle-clipping-path.jpg?s=612x612&w=0&k=20&c=RC3dmJPzsBSGnpfRtY0wjjb5G-LOLvxP4ZNmu_yJ8Qk=",
      },
      {
        name: "Eggs",
        description: "Pack of 12 fresh eggs",
        price: "150",
        image:
          "https://media.gettyimages.com/id/1404679048/photo/eggs.jpg?s=612x612&w=0&k=20&c=9VOmQWAYmRXN7ct09XqK-KC4znd0yfsIKSmHe4OY0Gc=",
      },
      {
        name: "Butter",
        description: "200g unsalted butter",
        price: "100",
        image:
          "https://media.gettyimages.com/id/71285401/photo/block-of-butter-close-up.jpg?s=612x612&w=0&k=20&c=LIRvmbl0ohQ9W0EPc6UM2RI399VylgDqHU-Qsx19OdY=",
      },
      {
        name: "Cheese",
        description: "500g block of cheddar cheese",
        price: "400",
        image:
          "https://media.gettyimages.com/id/172906439/photo/sliced-cheese.jpg?s=612x612&w=0&k=20&c=luZFceWSWlBSUEUY3-MIhpR2nO8OAswnUuqA3eFIa9E=",
      },
      {
        name: "Bread",
        description: "400g loaf of white bread",
        price: "50",
        image:
          "https://media.gettyimages.com/id/1214336871/photo/sliced-toast-bread-in-plastic-package-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=OVAjEYg4Kw_KbgW4iGzM00gz6R5Bm0AHOSvfeKplcWY=",
      },
      {
        name: "Tea",
        description: "500g packet of black tea",
        price: "200",
        image:
          "https://media.gettyimages.com/id/1314770608/photo/teabag-on-white-background.jpg?s=612x612&w=0&k=20&c=50C4bF5jS-LyZCCdqf1jr71xdOdnYpyWjPfEtaNeAFA=",
      },
      {
        name: "Coffee",
        description: "200g jar of instant coffee",
        price: "350",
        image:
          "https://media.gettyimages.com/id/471012713/photo/coffee-pouch-clear.jpg?s=612x612&w=0&k=20&c=QxPT1f8E-cXHkRSoH98dwxmvqIsluQz_urosLSrNvTA=",
      },
      {
        name: "Pasta",
        description: "500g packet of spaghetti",
        price: "120",
        image:
          "https://media.gettyimages.com/id/79711561/photo/bag-of-pasta.jpg?s=612x612&w=0&k=20&c=t3A6UmhmiH1WHFM8x97a7ruocWHCFzFhtuPJkI4wvnc=",
      },
      {
        name: "Tomato Sauce",
        description: "500g jar of tomato sauce",
        price: "100",
        image:
          "https://media.gettyimages.com/id/1283974596/vector/ketchup-icon-on-transparent-background.jpg?s=612x612&w=0&k=20&c=zW53-whyLmp6hfBPlD0taExwx1tcliZoz7tuOkW0FkM=",
      },
      {
        name: "Potatoes",
        description: "5kg bag of fresh potatoes",
        price: "250",
        image:
          "https://media.gettyimages.com/id/619568788/photo/raw-fresh-potatoes-in-the-sack-on-wooden-background.jpg?s=612x612&w=0&k=20&c=bO8TuNkCLlgHXa4Jfv7S7o1PO4YFOL8vYe6MDs6Z-Kw=",
      },
      {
        name: "Onions",
        description: "2kg bag of red onions",
        price: "100",
        image:
          "https://media.gettyimages.com/id/142021757/photo/open-bag-of-mixed-onions.jpg?s=612x612&w=0&k=20&c=zou2rhi5ZL92iQ4NVJqqp05KshXbkJMZPitPR0plFcg=",
      },
      {
        name: "Apples",
        description: "1kg of fresh apples",
        price: "150",
        image:
          "https://media.gettyimages.com/id/1290427645/photo/apple-in-a-cotton-net-bag-against-yellow-background.jpg?s=612x612&w=0&k=20&c=kxJmwQStsxQ-P3z53WeCwa5RwhEWJKmkwB3Eb-gUHx4=",
      },
      {
        name: "Bananas",
        description: "1 dozen ripe bananas",
        price: "80",
        image:
          "https://media.gettyimages.com/id/1292455541/photo/red-grocery-reusable-cloth-bag-with-group-of-yellow-bananas-on-blue-background-pollution-free.jpg?s=612x612&w=0&k=20&c=Por760YeQXV8WAGIo7v9JSxyuy09eOWjTsQJrkA8ER0=",
      },
      {
        name: "Carrots",
        description: "1kg of fresh carrots",
        price: "60",
        image:
          "https://media.gettyimages.com/id/84782492/photo/vacuum-packed-carrots.jpg?s=612x612&w=0&k=20&c=TFBjZBp847HdG7i5EtOqKq-W77blUQhmw47n8eBllkM=",
      },
      {
        name: "Chicken",
        description: "1kg of fresh chicken meat",
        price: "400",
        image:
          "https://media.gettyimages.com/id/93456470/photo/two-raw-chicken-breast-on-white-backdrop.jpg?s=612x612&w=0&k=20&c=ZjLBVTWFSMpkDR9iiu5X2xBHyWlv5glzsOjJd5mkcfg=",
      },
      {
        name: "Fish",
        description: "1kg of fresh fish",
        price: "500",
        image:
          "https://media.gettyimages.com/id/165637260/photo/close-up-of-fresh-sea-bream-against-white-background.jpg?s=612x612&w=0&k=20&c=ta9lxLdf8ADO-ztQTWwXrYwW8Dg7lAeX4SuP8LYIdPY=",
      },
      {
        name: "Lentils",
        description: "1kg packet of red lentils",
        price: "180",
        image:
          "https://media.gettyimages.com/id/163729647/photo/an-up-close-picture-of-organic-legumes.jpg?s=612x612&w=0&k=20&c=E9NdcSr4SxRaYtKjjjk6rFoHvw69mooX5aY78J34DMY=",
      },
      {
        name: "Cereal",
        description: "500g box of breakfast cereal",
        price: "300",
        image:
          "https://media.gettyimages.com/id/458953429/photo/total-raisin-bran-cereal-box.jpg?s=612x612&w=0&k=20&c=pj1CwP_39HxA3XTH3EnFmhTFmng0UIYzLBb9496orZs=",
      },
      {
        name: "Yogurt",
        description: "500ml plain yogurt",
        price: "50",
        image:
          "https://media.gettyimages.com/id/470176541/photo/great-value-ricotta-cheese-part-skim-jar.jpg?s=612x612&w=0&k=20&c=JQYkh7hoiGTjM8wCm2v7okmmikmvaLXp-2-W45x5O9E=",
      },
      {
        name: "Soap",
        description: "100g bar of bathing soap",
        price: "40",
        image:
          "https://media.gettyimages.com/id/458990951/photo/bar-of-dove-soap.jpg?s=612x612&w=0&k=20&c=eZt8RlVHTdGGopnU80e8_87cRDukgprtqZWRdTn2q7k=",
      },
      {
        name: "Toothpaste",
        description: "100g tube of toothpaste",
        price: "70",
        image:
          "https://media.gettyimages.com/id/495765214/photo/crest-complete-extra-whitening-toothpaste.jpg?s=612x612&w=0&k=20&c=WC6M697ohUi5t23whDYXumhEse7AbZUlLsj2WLq4W1c=",
      },
      {
        name: "Shampoo",
        description: "200ml bottle of shampoo",
        price: "150",
        image:
          "https://media.gettyimages.com/id/458888249/photo/dove-damage-therapy-daily-moisture-weightless-formula-shampoo-bottle.jpg?s=612x612&w=0&k=20&c=LL7uJqwEvttyfv3kFcy3I10luAQp9E5n6bc6EsSZRJs=",
      },
      {
        name: "Detergent",
        description: "1kg packet of washing powder",
        price: "250",
        image:
          "https://media.gettyimages.com/id/458541825/photo/tide-laundry-detergent.jpg?s=612x612&w=0&k=20&c=dANR8nwmEygarddqcysCNvgh41YWO1edi16DIGLI06o=",
      },
      {
        name: "Biscuits",
        description: "300g packet of biscuits",
        price: "50",
        image:
          "https://media.gettyimages.com/id/458268245/photo/savoritz-4-kids-mini-peanut-butter-sandwich-crackers.jpg?s=612x612&w=0&k=20&c=RtUnUM6wtFRawJdazmu8DmC6SwFCYLlnfq-8xhC8NkE=",
      },
      {
        name: "Chocolates",
        description: "100g milk chocolate bar",
        price: "80",
        image:
          "https://media.gettyimages.com/id/458571141/photo/milka-whole-nuts-chocolate-bar-isolated.jpg?s=612x612&w=0&k=20&c=wRYtb89wJ-KZdcgbT10EOzSsbjUm-ESd4O8QIzYtGxA=",
      },
    ];
    setProd(products);
  }, []);

  const addToCart = (e) => {
    // Access the parent element containing the product details
    let targetElement = e.target.parentElement.parentElement;

    // Extract product details (name, description, price)
    let productName = targetElement.querySelector("h2").innerText;
    let productDescription = targetElement.querySelector("p").innerText;
    let productPrice =
      targetElement.querySelector("p:nth-of-type(2)").innerText;
    let product = {
      name: productName,
      description: productDescription,
      price: productPrice,
    };
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const cartUpdating = (e) => {
    props.setCart(props.cart + 1);
    setNotify(!notify);
    setTimeout(() => {
      setNotify(false);
    }, 1000);
    console.log(props.cart);
    addToCart(e);
  };
  return (
    <>
      <Notify notify={notify} />
      <div className="flex justify-center m-10 gap-5   h-full pb-10  flex-wrap ">
        {prod.map((product, index) => (
          <div
            key={index}
            className="border border-slate-400  rounded-lg flex flex-col  items-center w-56 hover:bg-gradient-to-r from-slate-400/40 via-slate-300/25 to-slate-400/40 shadow-2xl"
          >
            <img
              src={product.image}
              alt=""
              className="h-64 object-center w-full"
            />
            <span className="flex flex-col items-center p-5 gap-y-2">
              <h2 className="text-center">{product.name}</h2>
              <p className="text-center">{product.description}</p>
              <p className="text-center">Price: Rs.{product.price}</p>
              <div className="mt-auto">
                <button
                  className="bg-orange-500 p-1 px-4 rounded-lg text-white w-fit hover:bg-orange-500/85 border border-black font-semibold"
                  onClick={cartUpdating}
                >
                  Order Now
                </button>
              </div>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
