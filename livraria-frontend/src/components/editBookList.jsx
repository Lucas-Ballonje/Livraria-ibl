import React, { useState } from 'react';
import axios from 'axios';

export const EditBook = ({ book, onBookUpdated }) => {
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleInputChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/books/${book.id}`, updatedBook);
      onBookUpdated();
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Editar Livro</h2>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={updatedBook.title}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={updatedBook.author}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={updatedBook.isbn}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          name="pages"
          placeholder="Quantidade de Páginas"
          value={updatedBook.pages}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="edition"
          placeholder="Edição"
          value={updatedBook.edition}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="publisher"
          placeholder="Editora"
          value={updatedBook.publisher}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
        >
          Atualizar Livro
        </button>
      </form>
    </div>
  );
};
