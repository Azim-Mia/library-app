import Books from '../src/component/books/books';
import Heading from '../src/component/libraryHeading.jsx';
import './App.css';
function App() {
  return (
    <div className="App">
   <div><Heading /></div> 
<div className="flex justify-center"><Books /></div>
    </div>
  );
}

export default App;
