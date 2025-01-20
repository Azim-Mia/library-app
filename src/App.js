import Books from '../src/component/books/books';
import Heading from '../src/component/libraryHeading.jsx';
import './App.css';
function App() {
  return (
    <div className="App">
    <a href="/library-app">Home</a>
   <div><Heading /></div> 
<div className="flex justify-center"><Books /></div>
    </div>
  );
}

export default App;
