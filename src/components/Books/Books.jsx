import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../features/books/booksSlice";
import { getAllGenres } from "../../features/genres/genresSlice";
import Book from "../Book/Book";
import AddBook from "./AddBook/AddBook";

const Books = () => {
  const dispatch = useDispatch();

  const getAllBooksAndGenres = async () => {
    await dispatch(getAll());
    dispatch(getAllGenres());
  };

  useEffect(() => {
    getAllBooksAndGenres();
  }, []);

  return (
    <div>
      <AddBook />
      <Book />
    </div>
  );
};

export default Books;
