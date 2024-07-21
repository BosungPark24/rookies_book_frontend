import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import BookList from "./book/BookList";
import BookWrite from "./book/BookWrite";
import BookDetail from "./book/BookDetail";


function App() {
  return (
    <>
    <div style = {{ padding: '10px'}}>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/list" element={<BookList />} />
        <Route path="/write" element={<BookWrite />} />
        <Route path="/detail/:bookId" element={<BookDetail />} />      
      </Routes>

    
    </div>
  </>

  );
}

export default App;
