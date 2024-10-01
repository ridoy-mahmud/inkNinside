import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getStoredApplication,
  getStoredApplicationWish,
} from "../LocalStorage/LocalStorage";
import DisplayListedBooks from "../DisplayListedBooks/DisplayListedBooks";

const ListedBooks = () => {
  const [listedBook, setListedBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [view, setView] = useState("read"); // "read" for Read Books, "wishlist" for Wishlisted Books
  const books = useLoaderData();

  // Load books data on component mount
  useEffect(() => {
    const loadData =
      view === "read" ? getStoredApplication() : getStoredApplicationWish();
    if (books.length) {
      const listOfBooks = [];
      for (const id of loadData) {
        const getBook = books.find((book) => book.bookId === id);
        if (getBook) {
          listOfBooks.push(getBook);
        }
      }
      setListedBooks(listOfBooks);
      setDisplayBooks(listOfBooks); // Initialize displayBooks with all listed books
    }
  }, [books, view]); // Re-run useEffect when 'view' changes

  // Handle filtering books by category
  const handleBookFilter = (filter) => {
    if (filter === "All") {
      setDisplayBooks(listedBook); // Reset to show all books
    } else {
      const filteredBooks = listedBook.filter(
        (book) => book.category === filter
      );
      setDisplayBooks(filteredBooks);
    }
  };

  // Show Read Books (default)
  const handleShowRead = () => {
    setView("read"); // Set the view to "read" when clicked
  };

  // Show Wishlisted Books
  const handleShowWishlist = () => {
    setView("wishlist"); // Set the view to "wishlist" when clicked
  };

  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-center py-12 rounded-xl bg-gray-50 font-bold text-2xl text-black">
        {view === "read" ? "Read Books" : "Wishlisted Books"}
      </h2>
      <br />
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="btn m-1 px-5 font-bold bg-green-600 text-white border-0">
            Sort By -{" "}
          </summary>
          <ul className="menu dropdown-content bg-white text-black rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleBookFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleBookFilter("Fiction")}>
              <a>Fiction</a>
            </li>
            <li onClick={() => handleBookFilter("Mystery")}>
              <a>Mystery</a>
            </li>
            <li onClick={() => handleBookFilter("Memoir")}>
              <a>Memoir</a>
            </li>
            <li onClick={() => handleBookFilter("Self-help")}>
              <a>Self-help</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="flex gap-2 ms-5 text-black border-black">
        <button
          onClick={handleShowRead}
          className={`px-3 py-3 border-t-2 rounded-t-xl border-s-2 border-e-2 ${
            view === "read" ? "bg-gray-200" : ""
          }`}
        >
          Read Books
        </button>
        <button
          onClick={handleShowWishlist}
          className={`px-3 py-3 border-t-2 rounded-t-xl border-s-2 border-e-2 ${
            view === "wishlist" ? "bg-gray-200" : ""
          }`}
        >
          Wishlisted Books
        </button>
      </div>
      <hr className="border-2 ms-5" />
      {displayBooks.length > 0 ? (
        displayBooks.map((book) => (
          <DisplayListedBooks
            book={book}
            key={book.bookId}
          ></DisplayListedBooks>
        ))
      ) : (
        <p className="text-center mt-6">No books available in this list.</p>
      )}
    </div>
  );
};

export default ListedBooks;
