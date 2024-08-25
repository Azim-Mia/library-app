import {useState,useEffect} from 'react'
const SearchText =(props)=>{
  const {onSearch} =props
  const [inputValue, setInputValue] = useState("");
  const handleSearchValue =(e)=>{
    setInputValue(e.target.value);
  }
  useEffect(()=>{
    onSearch(inputValue);
  })
  return (<>
  <input type="text" onChange={handleSearchValue} name="" placeholder="Search Book" value={inputValue} />
  </>)
}
export default SearchText;