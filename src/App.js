import Employee from './components/Employee';


function App() {
  console.log("DATA");
  const ShowEmployees = true;
  return (
    <div className="App">
    {console.log('inside return', ShowEmployees)}
    {ShowEmployees ? (
      <div>
      <Employee key="1" name="M4rk" role="tig lung-ag" />
      <Employee key="2" name="MartinGarrix" role="DJ" />
      <Employee key="3" name="Marshmello" role="" />

      </div>
    ):(
      <div>
        <h1><center>Unauthorized!</center></h1>
      </div>
    )}


    </div>
  );
}

export default App;
