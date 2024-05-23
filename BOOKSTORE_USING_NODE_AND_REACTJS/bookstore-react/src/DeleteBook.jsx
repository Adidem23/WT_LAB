import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteBook = () => {
    const navigate = useNavigate();
    const [Id , setId] = useState();
    const handleSubmit = (e)=>
        {
            e.preventDefault();
            axios.get("http://localhost:3001/deleteBook"+Id,(err,res)=>
            {
                console.log("Deleted")
            })
            navigate('/');
        }
  return (
    <div>
      <h1>Delete Book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ID">Id</label>
        <input type="number" name="ID" id="ID" onChange={(e)=>{
            setId(e.target.value)}}/>
        <button type="submit" name='submit'>Delete Book</button>
      </form>
    </div>
  )
}

export default DeleteBook
