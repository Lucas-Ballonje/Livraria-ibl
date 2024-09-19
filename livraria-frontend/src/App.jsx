// src/App.js
import { useState } from 'react';
import BookList from "./components/bookList"
import AddBook from "./components/AddBook";
import EditBook from './components/EditBook';
import axios from 'axios';

function App() {
  const [editingBook, setEditingBook] = useState(null);

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/books/${id}`);
      window.location.reload();
    } catch (error) {
      console.error('Erro ao deletar livro:', error);
    }
  };

  const handleBookAdded = () => {
    window.location.reload();
  };

  const handleBookUpdated = () => {
    setEditingBook(null);
    window.location.reload();
  };

  return (
    <div>
      <h1>API de Livros - Frontend</h1>
      {editingBook ? (
        <EditBook bookToEdit={editingBook} onBookUpdated={handleBookUpdated} />
      ) : (
        <AddBook onBookAdded={handleBookAdded} />
      )}
      <BookList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
