const DisplayListedBooks = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    totalPages,
    image,
    rating,
    category,
    tags,
    publisher,
    review,
    yearOfPublishing,
  } = book;

  return (
    <div className="w-full md:w-11/12 lg:w-8/12 mx-auto flex flex-col md:flex-row justify-start mt-10 border-2 p-4">
      <div className="w-full md:w-6/12 p-4">
        <img className="w-full md:w-10/12" src={image} alt="" />
      </div>
      <div className="w-full text-start text-black p-4">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          {bookName}
        </h1>
        <p className="text-lg text-gray-800 mt-2">By: {author}</p>
        <p className="mt-4">
          <span className="font-bold">Tags: </span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-green-600 bg-gray-100 px-2 py-1 rounded-lg text-sm mr-2"
            >
              #{tag}
            </span>
          ))}
        </p>
        <p className="mt-4 text-sm">
          <span className="font-bold">Year of Publishing: </span>
          {yearOfPublishing}
        </p>
        <hr className="border-2 mt-4" />
        <div className="font-sans flex gap-5 mt-4">
          <div className="text-gray-600">
            <p>No of pages:</p>
            <p>Publisher:</p>
            <p>Rating:</p>
          </div>
          <div className="text-black">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayListedBooks;
