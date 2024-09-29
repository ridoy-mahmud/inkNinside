import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBookApplication } from "../LocalStorage/LocalStorage";

const BookDetails = () => {
  const books = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);
  console.log(book, idInt);
  const {
    bookId,
    bookName,
    author,
    totalPages,
    image,
    rating,
    category,
    tags,
    review,
    yearOfPublishing,
    publisher,
  } = book;
  const handleCLick = () => {
    saveBookApplication(idInt);
    toast("Book have been readed");
  };
  return (
    <div className="w-10/12 mx-auto flex justify-start gap-7">
      <div className="w-6/12">
        <img
          className="w-full rounded-2xl p-24 bg-[#ece8e8]"
          src={image}
          alt=""
        />
      </div>
      <div className="w-8/12 text-start  text-black">
        <h1 className="font-bold text-4xl mt-3">{bookName}</h1>
        <br />
        <p className="text-xl text-gray-800">By : {author}</p>
        <br />
        <hr className="border-2" />
        <br />
        <p className="text-lg font-bold text-gray-800">{category}</p>
        <br />
        <hr className="border-2" />
        <br />
        <p>
          Review: {review} Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Alias explicabo vel ad at accusantium aut officiis harum omnis
          facilis a. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptatibus saepe, dicta nesciunt placeat tempora ipsam harum numquam
          voluptatum nemo architecto quidem adipisci vitae sequi quis quas,
          aliquid dignissimos vel. Deserunt. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Exercitationem, deleniti!
        </p>
        <br />
        <div>
          <p className="font-bold">
            Tags:
            <span className="ms-4 me-4 text-green-600 bg-[#ece8e8] px-2 py-1 rounded-xl text-center">
              #{tags[0]}
            </span>
            <span className=" text-green-600 bg-[#ece8e8] px-2 py-1 rounded-2xl text-center">
              #{tags[1]}
            </span>
          </p>
          <br />
          <hr className="border-2" />
          <br />
          <div className="font-sans flex gap-5">
            <div className=" text-gray-600 ">
              <p className="mb-2">No of pages:</p>
              <p className="mb-2">Publisher: </p>
              <p className="mb-2">Year of Publishing </p>
              <p className="mb-2">Rating: </p>
            </div>
            <div className="text-black">
              <p className="mb-2"> {totalPages}</p>
              <p className="mb-2">{publisher}</p>
              <p className="mb-2">{yearOfPublishing}</p>
              <p className="mb-2">{rating}</p>
            </div>
          </div>
        </div>
        <br />
        <div className="flex justify-start gap-5">
          <button className="border-2 px-6 py-2">Read</button>
          <button className="bg-blue-400 text-white px-6 py-2">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
