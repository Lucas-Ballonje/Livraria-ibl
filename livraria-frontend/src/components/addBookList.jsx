import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export const AddBook = ({ onBookAdded }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    isbn: '',
    pages: '',
    edition: '',
    publisher: '',
  });

  const handleInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/books', book);
      onBookAdded();
      setBook({
        title: '',
        author: '',
        isbn: '',
        pages: '',
        edition: '',
        publisher: '',
      });
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Adicionar Livro</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={book.title}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={book.author}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={book.isbn}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="pages"
          placeholder="Quantidade de Páginas"
          value={book.pages}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="edition"
          placeholder="Edição"
          value={book.edition}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="publisher"
          placeholder="Editora"
          value={book.publisher}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Adicionar Livro
        </button>
      </form>
    </div>
  );
};
