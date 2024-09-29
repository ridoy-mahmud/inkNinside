import { useEffect, useState } from "react";
import "./Books.css";

import Book from "../Book/Book";
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("../../../public/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-16 ">
      <h2 className="font-bold text-3xl py-5 mb-5 text-black text-center w-full">
        Books
      </h2>
      <div className="w-10/12 grid sm:grid-cols-1 lg:grid-cols-3  mx-auto justify-between gap-5">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
