import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [img, setImg] = useState('');


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="block mx-auto  shadow bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">+ Add Employee</button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log('hello from edit Employee');
                            console.log(props.id, name, role);
                            props.newEmployee(name, role, img);
                        }}
                        id='editemployeemodal'
                        className="w-full max-w-sm">

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="Fullname">
                                    Full Name
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="fullname"
                                placeholder='Boy Tapang' 
                                type="text" 
                                value={name} 
                                onChange={(e)=> {
                                    setName(e.target.value)
                                }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                                    Role
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                id="role" 
                                type="text"
                                placeholder='Fullstack Developer'
                                value={role}
                                onChange={(e) => {
                                    setRole(e.target.value)
                                }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="img">
                                Image Url
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="img" 
                            type="text"
                            placeholder='https://picsum.photos/200/300/?blur=2'
                            value={img}
                            onChange={(e) => {
                                setImg(e.target.value)
                            }}
                            />
                        </div>
                    </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <button onClick={handleClose} form="editemployeemodal" className="shadow bg-slate-600 hover:bg-slate-00 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        Close
                    </button>
                    <button form="editemployeemodal" onClick={handleClose} className="shadow bg-purple-600 hover:bg-purple-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        Add
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddEmployee;