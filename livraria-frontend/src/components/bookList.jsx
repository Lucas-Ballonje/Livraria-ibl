import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = ({ onEdit, onDelete }) => {
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
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
            <button onClick={() => onEdit(book)}>Editar</button>
            <button onClick={() => onDelete(book.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

BookList.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
