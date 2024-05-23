import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
    const navigate = useNavigate();
    const [Book, setBook] = useState(
        {
            book_name:"",
            category:"",
            price:"",
            description:""

        }
    );
    const handleChange = (e)=>{
        setBook({...Book,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/addBook",Book)
        navigate('/');
    }
  return (
    
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book_name">Name</label>
        <input type="text" name="book_name" id="book_name" onChange={(e)=>{handleChange(e)}}/>
        <label htmlFor="category">Category</label>
        <input type="text" name="category" id="category" onChange={(e)=>{handleChange(e)}}/>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" onChange={(e)=>{handleChange(e)}}/>
        <label htmlFor="description"> Description </label>
        <input type="text" name="description" id="description" onChange={(e)=>{handleChange(e)}}/>
        <button type="submit" name='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
