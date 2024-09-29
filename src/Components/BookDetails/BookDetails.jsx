import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getStoredApplication,
  getStoredApplicationWish,
  saveBookApplication,
  saveBookApplicationWishlist,
} from "../LocalStorage/LocalStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);

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

  // Function to handle adding a book to the "Read" list
  const handleRead = () => {
    const readList = getStoredApplication(); // get current read list
    const wishlist = getStoredApplicationWish(); // get current wishlist

    // Check if book is already in read list
    if (!readList.includes(idInt)) {
      saveBookApplication(idInt); // Add book to read list
      toast.success("Book has been added to 'Read' list.");

      // Check if the book is already in the wishlist, if so, move it to read list
      if (wishlist.includes(idInt)) {
        saveBookApplicationWishlist(idInt); // Keep it in wishlist if needed
      }
    } else {
      toast.error("This book is already in the 'Read' list.");
    }
  };

  // Function to handle adding a book to the "Wishlist"
  const handleWishlist = () => {
    const readList = getStoredApplication(); // get current read list
    const wishlist = getStoredApplicationWish(); // get current wishlist

    // Check if book is in the read list already
    if (readList.includes(idInt)) {
      saveBookApplicationWishlist(idInt); // Add to wishlist if already in read list
      toast.success("Book has been added to 'Wishlist'.");
    } else {
      // Show error toast if trying to wishlist without being in the read list
      toast.error("You must add this book to 'Read' list first.");
    }
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
      <div className="w-8/12 text-start text-black">
        <h1 className="font-bold text-4xl mt-3">{bookName}</h1>
        <p className="text-xl text-gray-800">By: {author}</p>
        <hr className="border-2 my-4" />
        <p className="text-lg font-bold text-gray-800">{category}</p>
        <hr className="border-2 my-4" />
        <p>
          {review} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          consequuntur, voluptatem quidem doloremque pariatur omnis temporibus
          accusantium corrupti aperiam voluptatibus hic ipsam repudiandae
          officia dolorum soluta ipsa tempora fugit, ab ex, dolores nam suscipit
          tenetur? Beatae dolorum est molestias consequatur?
        </p>
        <br />
        <div>
          <p className="font-bold">
            Tags:
            <span className="ms-4 me-4 text-green-600 bg-[#ece8e8] px-2 py-1 rounded-xl">
              #{tags[0]}
            </span>
            <span className="text-green-600 bg-[#ece8e8] px-2 py-1 rounded-2xl">
              #{tags[1]}
            </span>
          </p>
        </div>

        <div className="flex gap-5 my-4">
          <div className="text-gray-600">
            <p className="mb-2">No of pages: {totalPages}</p>
            <p className="mb-2">Publisher: {publisher}</p>
            <p className="mb-2">Year of Publishing: {yearOfPublishing}</p>
            <p className="mb-2">Rating: {rating}</p>
          </div>
        </div>

        <div className="flex gap-5">
          <button onClick={handleRead} className="border-2 px-6 py-2">
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="bg-blue-400 text-white px-6 py-2"
          >
            Wishlist
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetails;
