import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    totalPages,
    image,
    rating,
    category,
    tags,
  } = book;
  console.log(bookId);
  return (
    <Link to={`/book/${bookId}`}>
      <div to className="card bg-white text-black w-96 border-2 p-8">
        <figure className=" py-10 rounded-2xl bg-[#f3f3f3]">
          <img className="w-48 h-64" src={image} alt="Shoes" />
        </figure>

        <div className="flex mt-5 justify-start gap-3 w-10/12 text-green-700">
          <p className="bg-slate-100 px-7 rounded-xl py-2">{category}</p>
          <p className="bg-slate-100 px-7 rounded-xl py-2">{tags[0]}</p>
        </div>
        <div className=" items-start justify-start text-start">
          <h2 className="my-4 text-2xl font-bold">{bookName}</h2>
          <p className="mb-5">By: {author} </p>
          <hr className="border-dotted border-2 mb-4 " />
          <div className="flex justify-between w-full">
            <p> {category}</p>
            <p>
              <span className="flex items-center gap-1">
                {rating}
                <FaStar />
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
