import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AddBook from './addBook';
import DeleteBook from './DeleteBook';

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/addBook" element={<AddBook />} />
          <Route path="/" element={<Home />} />
          <Route path="/deleteBook" element={<DeleteBook/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
  );
}

export default App;
