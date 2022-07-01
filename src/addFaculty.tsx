import React,{useState} from 'react';

const AddFacullty = ({addNewFaculty}:{addNewFaculty:any}) =>{
    const [name, setName] = useState('');
    const [code, setCode] = useState('');

    const handleChangeName = (event:any) => {
        setName(event.target.value);
      };
      const handleChangeCode = (event:any) => {
        setCode(event.target.value);
    };
    
    const submit = (event:any) => {
        const obj = {
            name,code
        }
         event.preventDefault()
        addNewFaculty(obj);
    }
  return (
            <div className='grid place-items-center'>
          <h1 className="card-title my-3">Add New Faculty</h1>
          <form action="" onSubmit={submit}>
          <input type="text" placeholder="Name"  value={name} className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2" onChange={handleChangeName} />
              <input type="text" value={code} placeholder="Code" className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2" onChange={handleChangeCode} />
              <div className="card-actions">
              <button type='submit' className="btn btn-primary">Submit</button>

                  </div>
          </form>
                  
        </div>
          );
    }

export default AddFacullty;
