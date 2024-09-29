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
    <div className="w-8/12 mx-auto flex justify-start mt-20 border-2">
      <div className="w-6/12 p-6 mx-auto justify-center">
        <img className="w-10/12 " src={image} alt="" />
      </div>
      <div className="w-full text-start  text-black">
        <h1 className="font-bold text-4xl mt-3">{bookName}</h1>
        <br />
        <p className="text-xl text-gray-800">By : {author}</p>
        <br />
        <div>
          <p className="font-bold">
            Tags:
            <span className="ms-3 me-4 text-green-600 bg-[#ece8e8] px-2 py-1 rounded-xl text-center">
              #{tags[0]}
            </span>
            <span className=" text-green-600 bg-[#ece8e8] px-2 py-1 rounded-2xl text-center">
              #{tags[1]}
            </span>
            <span className="ms-4 text-sm font-serif">
              Year of Publishing:
              <span className="text-green-600 bg-[#ece8e8] px-2 py-1 rounded-2xl">
                #{yearOfPublishing}
              </span>
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
            </div>
            <div className="text-black">
              <p className="mb-2"> {totalPages}</p>
              <p className="mb-2">{publisher}</p>
              <p className="mb-2">{rating}</p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default DisplayListedBooks;
