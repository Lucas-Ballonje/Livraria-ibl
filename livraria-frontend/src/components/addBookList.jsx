import { useState } from 'react';
import axios from 'axios';

const AddBook = ({ onBookAdded }) => {
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
    <div>
      <h2>Adicionar Livro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={book.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={book.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={book.isbn}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="pages"
          placeholder="Quantidade de Páginas"
          value={book.pages}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="edition"
          placeholder="Edição"
          value={book.edition}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="publisher"
          placeholder="Editora"
          value={book.publisher}
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddBook;
