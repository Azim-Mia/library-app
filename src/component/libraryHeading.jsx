import libraryData from './data/dataStore'
const Heading =()=>{
  const data = libraryData();
  const flatBooks= data.flat()
return(<>
<div className="bg-pink">
<h1>Unicia Library</h1>

<div className="flex justify-center mb-2">
<p className="bg-coral p-3">Total-Prakasoni: {data.length}</p>
<p className="bg-coral p-3 ml-2">Total-Books: {flatBooks.length}</p>
</div>
</div>
  </>)
}
export default Heading;