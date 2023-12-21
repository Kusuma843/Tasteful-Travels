
import React,{useState} from 'react'
import Products from './products';

const App = () => {
  const[search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "ecb6948d";
  const YOUR_APP_KEY = "75065869d65cc522db39ad015e8337dd";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`)
     .then(response => response.json())
     .then(data => setData(data.hits))
     .catch(error => console.error('Error fetching data:',error));
    };
  return(
    <div>
      <center>
        <h3>Tasteful Travels</h3><br/>
        <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={(e) =>setSearch(e.target.value)}/> <br/><br/>
        <input type="submit" className="btn btn-primary" value="Search"/>
        </form> <br/>
        {data.length>=1 ? <Products data={data}/>:null}
      </center>
    </div>
  )
}

export default App