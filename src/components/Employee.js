import EditEmployee from "./EditEmployee";

function Employee(props) {

    return (
        <div>
            {/* 
        <h3>EMPLOYEE {props.name}</h3>
      
        <p>ROLE {props.role ? props.role :"WALAY TRABAHO"}</p>
        
        {props.role ? <h1>{props.role}</h1> : <h1>No Role!</h1>}
        */}

            <div className="min-w-[350px] min-h-[350px]  py-8 px-8 max-w-sm m-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-24 rounded-full h-[100px] w-[100px] sm:mx-0 sm:shrink-0" src={props.img} alt="Woman's Face" />
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            {props.name}
                        </p>
                        <p className="text-slate-500 font-medium">
                            {props.role}
                        </p>
                    </div>
                    <EditEmployee
                      id={props.id}
                      name={props.name} 
                      role={props.role} 
                      updateEmployee={props.updateEmployee} />
                   
                </div>
            </div>




        </div>

    )
}


export default Employee;