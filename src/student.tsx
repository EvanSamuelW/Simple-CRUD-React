import React from 'react';

const studentTable = ({data,updateStudent,deleteStudent}:{data:any,updateStudent:any,deleteStudent:any}) => {
    const edit = (data:any) => {
        const obj = {
            name:data.name,studentNumber:data.studentNumber,facultyId:data.facultyId,id:data.id
        }
        updateStudent(obj);
    }

    const remove = (data:any) => {
        deleteStudent(data.id);
    }
        return (
            <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                            <th>Student Number</th>
                            <th>Faculty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            data.map((item: any) => {
                                return (
                                    <tr>
                                    <th>{item.id}</th>
                                    <td>{item.name}</td>
                                        <td>{item.studentNumber}</td>
                                        <td>{ item.faculty.name}</td>
                                        <td><button  onClick={() => edit(item)} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                        </button><button  onClick={() => remove(item)} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button></td>
                                </tr>
                                )
                                
                            })
                        }
                        
                </tbody>
            </table>
        </div>
        )
       
        
    }
   


export default studentTable ;
