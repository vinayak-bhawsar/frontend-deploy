import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          
          <figure>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-40 w-full object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary capitalize">
                {item.category}
              </div>
            </h2>

            <p className="text-sm">
              {item.description?.slice(0, 60)}...
            </p>

            <div className="card-actions justify-between mt-3">
              <div className="badge badge-outline font-bold">
                ₹{item.price}
              </div>

              <div className="cursor-pointer px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;