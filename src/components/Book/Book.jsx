import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { deleteBook, getBookById } from "../../features/books/booksSlice";
import EditModal from "../Books/EditModal/EditModal";
const Book = () => {
  //   const books  = useSelector((state) => state.books.books);
  //   const book  = useSelector((state) => state.books.book);
  const { books } = useSelector((state) => state.books);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const showModal = (id) => {
    dispatch(getBookById(id))
    console.log(id);
    setIsModalVisible(true);
  };

  if (!books) {
    return <h1>cargando...</h1>;
  }
  const book = books.map((book) => {
    return (
      <div key={book.id}>
        <h2>{book.name}</h2>
        <p>{book.price} €</p>
        <EditOutlined onClick={() => showModal(book.id)} />
        <DeleteOutlined onClick={() => dispatch(deleteBook(book.id))} />
      </div>
    );
  });
  return (
    <div>
      {book}
      <EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
};

export default Book;
