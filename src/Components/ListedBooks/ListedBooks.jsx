import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../LocalStorage/LocalStorage";
import DisplayListedBooks from "../DisplayListedBooks/DisplayListedBooks";

const ListedBooks = () => {
  const [listedBook, setListedBooks] = useState([]);
  const books = useLoaderData();
  useEffect(() => {
    const loadDataid = getStoredApplication();
    console.log(loadDataid[0]);
    if (books.length) {
      const listOfBooks = [];
      for (const id of loadDataid) {
        const getBook = books.find((book) => book.bookId === id);
        if (getBook) {
          listOfBooks.push(getBook);
        }
      }
      setListedBooks(listOfBooks);
    }
  }, [books]);
  console.log(listedBook);
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-center py-12 rounded-xl bg-gray-50 font-bold text-2xl text-black">
        Books
      </h2>
      <br />
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="btn m-1 px-5 font-bold bg-green-600 text-white border-0">
            Sort By -{" "}
          </summary>
          <ul className="menu dropdown-content bg-white text-black rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <Link>All</Link>
            </li>
            <li>
              <Link>Academic</Link>
            </li>
          </ul>
        </details>
      </div>

      <div className="flex gap-2 ms-5 text-black border-black">
        <button className="px-6 py-4 border-t-2 rounded-t-xl rounded-st-xl rounded-et-xl border-s-2 border-e-2">
          Read Books
        </button>
        <button className="px-6 py-4">Wishlisted Books</button>
      </div>
      <hr className="border-2 ms-5" />
      {listedBook.map((book) => (
        <DisplayListedBooks book={book} key={book.bookId}></DisplayListedBooks>
      ))}
    </div>
  );
};

export default ListedBooks;
