import axios from "axios";

const API_URL = "http://localhost:8000";

const getAll = async () => {
  const res = await axios.get(API_URL + "/books/getAllBooks");
  return res.data;
};

const createBook = async (book) => {
  const res = await axios.post(API_URL + "/books/createBook", book);
  return res.data;
};
const deleteBook = async (id) => {
  const res = await axios.delete(API_URL + "/books/destroyBook/" + id);
  return res.data;
};
const getBookById = async (id) => {
  const res = await axios.get(API_URL + "/books/getBookById/" + id);
  return res.data;
};

const updateBook = async (book) => {
    const res = await axios.put(API_URL + "/books/updateBook/"+ book.id, book);
    return res.data;
  };

const booksService = {
  getAll,
  createBook,
  deleteBook,
  getBookById,
  updateBook
};

export default booksService;
