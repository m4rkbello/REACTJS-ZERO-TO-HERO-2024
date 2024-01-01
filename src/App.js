import Employee from './components/Employee';
//useState para ipasa ang data gamit onChange method
import { useState } from 'react';
//uuid universal unique identifier id
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';


function App() {
  console.log("DATA");
  const ShowEmployees = true;

  const [role, setRole] = useState('dev');

  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: 'M4rk Bello',
        role: 'tig lung-ag',
        img: 'https://picsum.photos/200/300/?blur'
      },
      {
        id: 2,
        name: 'Martin Garrix',
        role: 'DJ',
        img: 'https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg'
      },
      {
        id: 3,
        name: 'Marshmello',
        role: 'DJ',
        img: 'https://images.pexels.com/photos/3064620/pexels-photo-3064620.jpeg'
      },
      {
        id: 4,
        name: 'Paul Jorge',
        role: 'MAOY',
        img: 'https://images.pexels.com/photos/2180882/pexels-photo-2180882.jpeg'
      },
      {
        id: 5,
        name: 'Kawhi Leonard',
        role: 'Robot',
        img: 'https://images.pexels.com/photos/2060951/pexels-photo-2060951.jpeg'
      },
      {
        id: 3,
        name: 'Marshmello',
        role: 'DJ',
        img: 'https://images.pexels.com/photos/3064620/pexels-photo-3064620.jpeg'
      },
      {
        id: 4,
        name: 'Paul Jorge',
        role: 'MAOY',
        img: 'https://images.pexels.com/photos/2180882/pexels-photo-2180882.jpeg'
      },
      {
        id: 5,
        name: 'Kawhi Leonard',
        role: 'Robot',
        img: 'https://images.pexels.com/photos/2060951/pexels-photo-2060951.jpeg'
      },
    ]
  );

  //updateEmployeeFunction 
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        //new employee
        return { ...employee, name: newName, role: newRole }
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  //AddNewEmployeeFunction 
  function newEmployee(name, role, img) {

    const lastId = employees.length > 0 ? employees[employees.length - 1].id : 0;
    //parse
    const newId = lastId + 1;

  
    const newEmployee = {
      id: newId,
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee])
  };

  return (
    <div className="App">
      {console.log('inside return', ShowEmployees)}
      {ShowEmployees ? (
        <div>
          <div className="flex flex-wrap">

            {/*
               <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }} />
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
          */}

            {employees.map((employee) => {
              console.log(employee);
              console.log("UUIUD DATA", uuidv4());
              return (
                <div className="mx-auto"> {/* Center each Employee */}
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    updateEmployee={updateEmployee}
                  />
                </div>
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />

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
