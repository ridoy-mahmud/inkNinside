const getStoredApplication = () => {
  const storedApplication = localStorage.getItem("bookDetails");
  if (storedApplication) {
    return JSON.parse(storedApplication);
  }
  return [];
};
const saveBookApplication = (id) => {
  const storedBookApplication = getStoredApplication();
  const exist = storedBookApplication.find((bookId) => bookId === id);
  if (!exist) {
    storedBookApplication.push(id);
    localStorage.setItem("bookDetails", JSON.stringify(storedBookApplication));
  }
};
export { getStoredApplication, saveBookApplication };
