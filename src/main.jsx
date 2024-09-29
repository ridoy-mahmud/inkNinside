import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root"; // Import your custom Root component
import Home from "./Components/Home/Home"; // Import Home component
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import PagesToRead from "./Components/PagesToRead/PagesToRead";
import BookDetails from "./Components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../public/books.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
