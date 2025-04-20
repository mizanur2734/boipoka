import React from "react";
import { IoStarHalf } from "react-icons/io5";
const Book = ({ singleBook }) => {
  console.log(singleBook);
  const { bookName, author, image, category, rating } = singleBook;
  return (
    <div className="card bg-base-100 shadow-sm border p-6">
      <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating} <IoStarHalf />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
