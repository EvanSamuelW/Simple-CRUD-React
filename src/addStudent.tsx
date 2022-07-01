import React,{useState} from 'react';

const AddStudent = ({faculty,addNewStudent}:{faculty:any,addNewStudent:any}) =>{
    const [name, setName] = useState('');
  const [facultyId, setFacultyId] = useState(0);
  const [studentNumber, setStudentNumber] = useState('');

    const handleChangeName = (event:any) => {
        setName(event.target.value);
      };
      const handleChangeStudentNumber = (event:any) => {
        setStudentNumber(event.target.value);
  };
  const handleFaculty = (event:any) => {
    setFacultyId(event.target.value);
};
    
  const submit = (event: any) => {
    
        const obj = {
            name,facultyId:facultyId,studentNumber
        }
        event.preventDefault();
        addNewStudent(obj);
    }
  return (
            <div className='flex flex-col 
            items-center justify-center'>
      <h1 className="card-title my-3">Add New Student</h1>

          <form action="" onSubmit={submit}>
          <input type="text" placeholder="Name"  value={name}  className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"  onChange={handleChangeName} />
        <input type="text" value={studentNumber} placeholder="Student Number" className="text-sm text-gray-base w-full mr-3 
                              py-5 px-4 h-2 border border-gray-200 
                              rounded mb-2" onChange={handleChangeStudentNumber} />
        <select value={facultyId} onChange={handleFaculty} className="select select-bordered w-full w-full mr-3 mb-3">
          {
            faculty.map((item: any) => {
              return (
                <option value={item.id}>{item.name}</option>
              )
            })
          }
                    <option value={0} disabled selected>Select Faculty</option>

</select>

             
              <button type='submit' className="btn btn-primary">Submit</button>

                
          </form>
                  
        </div>
          );
    }

export default AddStudent;
