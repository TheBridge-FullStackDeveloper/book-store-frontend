import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "./booksService";

const initialState = {
  books: [],
  book: {},
};

export const getAll = createAsyncThunk("books/getAll", async () => {
  try {
    return await booksService.getAll();
  } catch (error) {
    console.error(error);
  }
});
export const createBook = createAsyncThunk("books/createBook", async (book) => {
  try {
    return await booksService.createBook(book);
  } catch (error) {
    console.error(error);
  }
});
export const deleteBook = createAsyncThunk("books/destroyBook", async (id) => {
  try {
    return await booksService.deleteBook(id);
  } catch (error) {
    console.error(error);
  }
});
export const getBookById = createAsyncThunk("books/getBookById", async (id) => {
  try {
    return await booksService.getBookById(id);
  } catch (error) {
    console.error(error);
  }
});

export const update = createAsyncThunk("books/update", async (book) => {
  try {
    return await booksService.updateBook(book);
  } catch (error) {
    console.error(error);
  }
});

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.books = action.payload.books;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload.book];
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter(
          (book) => book.id !== +action.payload.id
        );
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.book = action.payload.book;
      })
      .addCase(update.fulfilled, (state, action) => {
        const books = state.books.map((book) => {
          if (book.id === action.payload.book.id) {
            book = action.payload.book;
          }
          return book;
        });
        state.books = books;
      });
  },
});

export default booksSlice.reducer;
