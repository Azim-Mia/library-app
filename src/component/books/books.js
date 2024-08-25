import {useState,useEffect} from 'react'
import Table from './table';
import SearchText from './searchText';
import libraryData from '../data/dataStore.js';
const Books=()=>{
const [books,setBooks]= useState([]);
const [filterBooks,setFilterBooks]= useState(books);
useEffect(()=>{
const data= libraryData();
const flatData =data.flat();
  setBooks(flatData);
  setFilterBooks(flatData);
},[]);
const heandleSearch =(searchValue)=>{
  let value=searchValue.toLowerCase();
   const filter = books.filter((book)=>{
    const bookNames= book.bookName.toLowerCase();
    return bookNames.startsWith(value)
    })
    setFilterBooks(filter);
}
  return (<div>
  <div><SearchText onSearch={heandleSearch}/></div>
  <div className="mt-4"><Table books={filterBooks} /></div>
  </div>)
}
export default Books;