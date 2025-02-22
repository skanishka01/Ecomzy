
import React from "react";
import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const products = [
  {
    id: 3,
    name:'Product 1',
    price: 55.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: 4.7
  },
  {
    id: 2,
    name:"Product 3",
    price: 39.99,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: 4.2
  },
  {
    id: 3,
    name:"Product 2",
    price: 9.99,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating:4,
  },
 {
    id: 13,
    name: "Product 4",
    price: 599,
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: 3.2
  },
];

const Home = () => {

  return (
    <>
      <div className="relative min-h-[630px] w-full overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mt-4 "
          style={{
            backgroundImage: `url('https://t3.ftcdn.net/jpg/04/91/02/60/360_F_491026081_fgVXSXQLfNA7eDERd17vWFcKFs1UJVbV.jpg')`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-4 pt-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-[#ff6347]">Best Price</span>{" "}
              <span>This Year</span>
            </h1>

            <p className="text-lg text-gray-600">
              Ecomzy offers you a seamless and enjoyable shopping experience, making every purchase effortless and satisfying.
            </p>
            <NavLink to="/blog">
              <button
                className="text-white bg-slate-800 p-3 rounded-md text-lg hover:bg-blue-950 hover:scale-110 transition duration-300 ease-in mt-4"
                onClick={() => console.log("Shop now clicked")}
              >
                SHOP NOW
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Top Products Section */}
      <section className="py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-950">Top Products</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="mb-4 bg-white  overflow-hidden hover:scale-105 transition duration-300 ease-in p-4 shadow-[inset_-12px_-8px_40px_#46464620]  rounded-xl  hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <div className="p-4">
                  <div className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-72 w-80  object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={index < product.rating ? "text-yellow-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-xl font-bold">${product.price}</p>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-200">
                  <button 
                    className="w-full bg-red-500 text-gray-800 py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
                    onClick={() => console.log(`Add to cart: ${product.name}`)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;