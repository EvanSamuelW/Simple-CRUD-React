import React from 'react';

const facultyTable = ({data,updateFaculty}:{data:any,updateFaculty:any}) => {
    const edit = (data:any) => {
        const obj = {
            name:data.name,code:data.code,id:data.id
        }
        updateFaculty(obj);
    }
        return (
            <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Code</th>
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
                                    <td>{item.code}</td>
                                        <td><button  onClick={() => edit(item)} className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
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
   


export default facultyTable ;
