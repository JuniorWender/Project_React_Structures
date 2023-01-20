import Button from './components/Button'
function App() {

  function meuEvento(){
    console.log('ativando evento');
  }

  function segundoEvento(){
    console.log('segundo evento');
  }
  
  return (
    <>
      <Button event={meuEvento} text="primeiro evento"/>
      <Button event={segundoEvento} text="segundoEvento"/>
    </>
  );
}

export default App;
