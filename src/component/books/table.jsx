
const Table =({books})=>{
  const data= books.filter((all)=>{
    return all;
  }) 
  const sliceData= data.slice(0,20)
  return (<div>
  <table>
  <tr>
  <th>ID:</th>
  <th>Book Name</th>
  <th>Prokasoni</th>
  <th>Main Price</th>
  <th>Note Price</th>
  <th>MainBook Price discount</th>  
    <th>NoteBook Price discount</th> 
    </tr>
  {sliceData.map((book)=><tr key={book.id}>
  <td>{book.id}</td>
  <td>{book.bookName}</td>
  <td>{book.prokasoni}</td>  
  <td>{book.priceMain}</td>
    <td>{book.priceMain}</td>
  <td>{book.discountPriceMaim}</td>  
  <td>{book.discountPriceNote}</td>
  </tr>)}
  </table>
  </div>)
  }
export default Table;