import Employee from './components/Employee';

//useState para ipasa ang data gamit onChange method
import { useState } from 'react';


function App() {
  console.log("DATA");
  const ShowEmployees = true;

  const [role, setRole] = useState('dev');

  return (
    <div className="App">
      {console.log('inside return', ShowEmployees)}
      {ShowEmployees ? (
        <div>


          <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }} />
          <div className="flex flex-wrap justify-center">
            <Employee className="mx-2" key="1" name="M4rk" role="tig lung-ag" />
            <Employee key="2" name="MartinGarrix" role="DJ" />
            <Employee key="3" name="Marshmello" role={role} />
            <Employee className="mx-2" key="1" name="M4rk" role="tig lung-ag" />
            <Employee key="2" name="MartinGarrix" role="DJ" />
            <Employee key="3" name="Marshmello" role={role} />
            <Employee key="3" name="Marshmello" role={role} />
            <Employee className="mx-2" key="1" name="M4rk" role="tig lung-ag" />
            <Employee key="2" name="MartinGarrix" role="DJ" />
            <Employee key="3" name="Marshmello" role={role} />
          </div>

        </div>
      ) : (
        <div>
          <h1><center>Unauthorized!</center></h1>
        </div>
      )}


    </div>
  );
}

export default App;
