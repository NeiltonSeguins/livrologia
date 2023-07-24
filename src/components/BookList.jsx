// BookList.js
import React, { useEffect, useState } from "react";
import Book from "./Book";
import booklist from "../books.json";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_API_KEY
);

const BookList = () => {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    let { data, error } = await supabase.from("books").select();

    if (data !== null) {
      setBooks([...data]);
    } else {
      console.log(error);
    }
  }

  async function addBook() {
    const { error } = await supabase.from("books").insert({
      id: 5,
      title: "1984",
      author: "George Orwell ",
      description:
        "1984: Clássico polêmico de Orwell, popularizou termos como Grande Irmão e duplopensar, com protagonista sonhando com rebelião.",
      pages: 336,
      tag: "Lendo",
      imageUrl:
        "https://m.media-amazon.com/images/P/B08XFR7N7Y.01._SCLZZZZZZZ_SX500_.jpg",
    });

    if (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBooks();
  }, [books]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold mb-8">Minha Lista de Livros</h2>
      <button
        onClick={addBook}
        className="px-4 py-2 bg-blue-600 text-base font-bold text-gray-50 rounded-md mb-8"
      >
        Adicionar livro
      </button>
      <ul className="grid grid-cols-2 gap-4 justify-center items-center">
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
