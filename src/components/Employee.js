function Employee(props){


    return(
        <div>
        <h3>EMPLOYEE {props.name}</h3>
        {/* FIRST METHOD*/}
        <p>ROLE {props.role ? props.role :"WALAY TRABAHO"}</p>
         {/* SECOND METHOD*/}
        {props.role ? <h1>{props.role}</h1> : <h1>No Role!</h1>}
        </div>

    ) 
}


export default Employee;