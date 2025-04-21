import React from "react";
import { IoStarHalf } from "react-icons/io5";
import { Link } from "react-router";
const Book = ({ singleBook }) => {
  console.log(singleBook);
  const {
    bookName,
    bookId,
    image,
    category,
    rating,
    tags,
    yearOfPublishing,
    publisher,
  } = singleBook;
  return (
    <Link to={`bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm border p-6">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex  gap-4">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by: {publisher}</p>
          <div className="border-t-1 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <IoStarHalf />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
