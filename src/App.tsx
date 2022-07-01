import React, { useState,useEffect} from 'react';
import FacultyTable from './faculty';
import LoginForm from './loginForm';
import AddFaculty from './addFaculty';
import EditFaculty from './editFaculty';
import StudentTable from './student';
import AddStudent from './addStudent';
import axios from 'axios';
import EditStudent from './editStudent';
const baseURL = "http://localhost:3000/";
const App = () => {
  const [faculties, setFaculties] = useState([]);
  const [students, setStudents] = useState([]);
  const [IsLoggedIn, setIsLoggendIn] = useState(false);
  const [showFaculty, setShowFaculty] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [createFacultyData, setCreateFacultyData] = useState(false);
  const [createStudentData, setCreateStudentData] = useState(false);
  const [editFaculty, setEditFaculty] = useState(false);
  const [editStudent, setEditStudent] = useState(false);
  const [faculty, setFaculty] = useState({});
  const [student, setStudent] = useState({});
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [alertError, setAlertError] = useState(false);

  const signout = () => {
    setIsLoggendIn(false);
    setShowFaculty(false);
    setShowStudent(false);
    setCreateFacultyData(false);
    setCreateStudentData(false);
    setEditFaculty(false);
    setEditStudent(false);
  }

  const openFaculty = () => {
  
      setShowFaculty(true);
      setCreateFacultyData(false);
      setEditFaculty(false);
      setShowStudent(false);
      setCreateStudentData(false);
      setEditStudent(false);
      setIsLoggendIn(true);
    
  
  }

  const openStudent = () => {
      setShowStudent(true);
      setShowFaculty(false);
      setCreateStudentData(false);
      setEditStudent(false);
      setCreateFacultyData(false);
      setEditFaculty(false);
      setIsLoggendIn(true);
    
   
  }

  const createFaculty = () => {
    setShowFaculty(false);
    setCreateFacultyData(true);
  }

  const createStudent = () => {
    setShowStudent(false);
    setCreateStudentData(true);
  }

  const updateFaculty = (data:any) => {
    setShowFaculty(false);
    setEditFaculty(true);
    setFaculty(data);
  }

  const updateStudent = (data:any) => {
    setShowStudent(false);
    setEditStudent(true);
    setStudent(data);
  }

  const getFaculties = () => {
    axios.get(baseURL+'faculties').then((response) => {
      setFaculties(response.data.data);
    });
  }

  const getStudents = () => {
    axios.get(baseURL+'students').then((response) => {
      setStudents(response.data.data);
    });
  }
  useEffect(() => {
    getFaculties();
    getStudents();
  }, []);
   
  const addNewFaculty = (data: any) => {
    axios.post(baseURL + 'faculties', data).then(() => {
      setAlertText('Data Successfully Added');
      setAlert(true);
     setTimeout(() => {
      setAlert(false);
     }, 3000);
      setCreateFacultyData(false);
      getFaculties();
      setShowFaculty(true);
    }).catch((error) => {
      setAlertText(error.response.data.message);
      setAlertError(true);
     setTimeout(() => {
      setAlertError(false);
     }, 3000);
    })
  }
  const editFacultyData = (data: any) => {
    axios.put(baseURL + 'faculties/'+data.id, data).then(() => {
      setAlertText('Data Successfully Updated');
      setAlert(true);
     setTimeout(() => {
      setAlert(false);
     }, 3000);
      setEditFaculty(false);
      getFaculties();
      setShowFaculty(true);

    }).catch((error) => {
      setAlertText(error.response.data.message);
      setAlertError(true);
     setTimeout(() => {
      setAlertError(false);
     }, 3000);
    })
  }
  const addNewStudent = (data: any) => {
    axios.post(baseURL + 'students', data).then(() => {
      setAlertText('Data Successfully Added');
      setAlert(true);
     setTimeout(() => {
      setAlert(false);
     }, 3000);
      setCreateStudentData(false);
      getStudents();
      setShowStudent(true);
    }).catch((error) => {
      setAlertText(error.response.data.message);
      setAlertError(true);
     setTimeout(() => {
      setAlertError(false);
     }, 3000);
    })
  }

  const editStudentData = (data: any) => {
    axios.put(baseURL + 'students/'+data.id, data).then(() => {
      setAlertText('Data Successfully Updated');
      setAlert(true);
     setTimeout(() => {
      setAlert(false);
     }, 3000);
      setEditStudent(false);
      getStudents();
      setShowStudent(true);

    }).catch((error) => {
      setAlertText(error.response.data.message);
      setAlertError(true);
     setTimeout(() => {
      setAlertError(false);
     }, 3000);
    })
  }

  const login = (data:any) => {
    axios.post(baseURL + 'users/login', data).then(() => {
      setIsLoggendIn(true);
      setShowFaculty(true);
    }).catch((error) => {
      setAlertText(error.response.data.message);
      setAlertError(true);
     setTimeout(() => {
      setAlertError(false);
     }, 3000);
    })
  }

  const deleteStudent = (id: number) => {
    axios.delete(baseURL + 'students/' + id).then(() => {
      setAlertText('Data Successfully Deleted');
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      getStudents();

    }).catch((error) => {
      setAlertText(error.response.data.message);
      setAlertError(true);
     setTimeout(() => {
      setAlertError(false);
     }, 3000);
    });
  }
  return (
    <div className='grid place-items-center h-screen'>
<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300">
          {IsLoggedIn && (
                     <div className="flex-none lg:hidden">
                     <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                     </label>
                   </div> 
                )}
    
      <div className="flex-1 px-2 mx-2">Admin Panel</div>
            <div className="flex-none hidden lg:block">
              {IsLoggedIn && (
                 <ul className="menu menu-horizontal">
                 <li onClick={openFaculty}><a>Faculty</a></li>
                <li onClick={openStudent}><a>Student</a></li>
               <li onClick={signout}><a >Signout</a></li>
     </ul>
              )}
             
      </div>
    </div>
          <div className="overflow-x-auto">
            {
              alert && (<div className="alert alert-success shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{ alertText}</span>
              </div>
            </div>)
            }
             {
              alertError && (
                <div className="alert alert-error shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{ alertText}</span>
                </div>
              </div>
              )
            }
    {!IsLoggedIn && (
          <LoginForm login={login}/>
          )}
            {IsLoggedIn && showFaculty && (
              <div>
                  <button onClick={createFaculty} className="btn btn-primary my-5">Create Faculty</button>
                <FacultyTable data={faculties} updateFaculty={ updateFaculty} />
              </div>
              
            )}
            {IsLoggedIn && showStudent && (
              <div>
                  <button onClick={createStudent}  className="btn btn-primary my-5">Create Student</button>
                <StudentTable data={students} updateStudent={updateStudent} deleteStudent={deleteStudent} />
              </div>
              
            )}
            { createFacultyData && (
              <AddFaculty addNewFaculty={addNewFaculty} />
            )

            }
            { editFaculty && (
              <EditFaculty data={faculty} editFaculty={editFacultyData} />
            )

            }
             { createStudentData && (
              <AddStudent faculty={faculties} addNewStudent={addNewStudent} />
            )

            }
              { editStudent && (
              <EditStudent data={student} faculty={faculties} editStudent={editStudentData} />
            )

            }
</div>
  </div> 
        <div className="drawer-side">
          
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
    <li onClick={openFaculty}><a>Faculty</a></li>
                <li onClick={openStudent}><a>Student</a></li>
                <li onClick={signout}><a >Signout</a></li>
      
    </ul>
    
  </div>
</div>
  
  </div>

  );
}

export default App;
