import EditEmployee from "./EditEmployee";

function Employee(props) {

    const handleRemoveEmployee = () => {
        // Call the removeEmployee function from props with the employee's id
        props.removeEmployee(props.id);
      };


    return (
        <div>
            <div className="py-8 px-8 max-w-sm m-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-24 rounded-full h-[100px] w-[100px] sm:mx-0 sm:shrink-0" src={props.img} alt="Images" />
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            {props.name}
                        </p>
                        <p className="text-slate-500 font-medium">
                            {props.role}
                        </p>
                    </div>
                    {props.editEmployee}
                    <button onClick={handleRemoveEmployee} className="px-2  py-1 s mt-2 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
                    Remove
                  </button>
                </div>
            </div>
        </div>

    )
}


export default Employee;