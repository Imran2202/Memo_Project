import './App.css';
import { Header } from './Header';

function App() {
  async function fetchthis(){
    const data  = await fetch("http://localhost:3003")
    const res = await data.json()
    console.log(res)
  }
  return (
    <div >
     <button  onClick={()=>fetchthis()}>Click me</button>
     
    
      jksda
       
    </div>
  );
}

export default App;
