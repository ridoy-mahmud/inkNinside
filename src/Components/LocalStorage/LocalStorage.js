// LocalStorage utility functions
const getStoredApplication = () => {
  const storedApplication = localStorage.getItem("bookDetails");
  return storedApplication ? JSON.parse(storedApplication) : [];
};

const saveBookApplication = (id) => {
  const storedBookApplication = getStoredApplication();
  if (!storedBookApplication.includes(id)) {
    storedBookApplication.push(id);
    localStorage.setItem("bookDetails", JSON.stringify(storedBookApplication));
  }
};

const getStoredApplicationWish = () => {
  const storedApplication = localStorage.getItem("bookDetailsWishlist");
  return storedApplication ? JSON.parse(storedApplication) : [];
};

const saveBookApplicationWishlist = (id) => {
  const storedBookApplication = getStoredApplicationWish();
  if (!storedBookApplication.includes(id)) {
    storedBookApplication.push(id);
    localStorage.setItem(
      "bookDetailsWishlist",
      JSON.stringify(storedBookApplication)
    );
  }
};

export {
  getStoredApplication,
  getStoredApplicationWish,
  saveBookApplication,
  saveBookApplicationWishlist,
};
