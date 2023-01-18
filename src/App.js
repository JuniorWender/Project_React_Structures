// import OtherList from './components/OtherList'
import {useState} from 'react'
import './App.css';
import YourName from './components/YourName';

function App() {

  // const  Itens = ['React', 'Vue' , 'Angular'] //List Render
  const [name, setName] = useState(); //State Lift
  
  return (
    <div className="App">

      {/* List Render Test */}
      {/* <OtherList frameworks={Itens}/> */}
      {/* <OtherList frameworks={[]}/> */}


      {/* State Lift Test */}
      <YourName setName={setName} />
      {name}
    </div>
  );
}

export default App;
