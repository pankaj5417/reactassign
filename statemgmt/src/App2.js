import logo from './logo.svg';
import './App.css';

function App() {
  const handleData=(data)=>{
    console.log("recieved",data)
  }
  return (
    <div className="App">
      <Child handleData={handleData} />
      <h3>recieved:{}</h3>
    </div>
  );
}
function Child({handleData}){

  const data="MasaiSchool"
  handleData(data)

  return <div>

  </div>
}

function Child2({data}){
  
}
export default App;
