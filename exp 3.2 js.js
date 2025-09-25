import React, { useState } from 'react';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import './styles.css';

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: '1984' },
    { id: 2, title: 'The Great Gatsby' },
    { id: 3, title: 'To Kill a Mockingbird' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleAddBook = (title) => {
    const newBook = {
      id: Date.now(),
      title,
    };
    setBooks([newBook, ...books]);
  };

  const handleRemoveBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <h1>📚 Library Management</h1>

      <input
        type="text"
        placeholder="Search books..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <AddBookForm onAdd={handleAddBook} />

      <BookList books={filteredBooks} onRemove={handleRemoveBook} />
    </div>
  );
};

export default App;
