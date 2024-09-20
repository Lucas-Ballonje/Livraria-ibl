import { useEffect, useState } from 'react';
import axios from 'axios';

export const BookList = ({ onEdit, onDelete }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Lista de Livros</h2>
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book.id} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
            <div className='flex flex-col gap-4'>
              <strong><strong>Titulo:</strong> {book.title}</strong>
              <span><strong>Autor:</strong> {book.author}</span>
              <span><strong>Edição</strong> {book.edition}ª</span> 
              <span><strong>Editora:</strong> {book.publisher}</span>
            </div>
            <div className="space-x-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded"
                onClick={() => onEdit(book)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => onDelete(book.id)}
              >
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
