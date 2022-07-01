import React,{useState} from 'react';

const LoginForm = ({ login }: { login: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = (event:any) => {
      setUsername(event.target.value);
    };
    const handleChangePassword = (event:any) => {
      setPassword(event.target.value);
  };
        return (
            <div className='grid place-items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h1 className="card-title mb-5">Login</h1>
                  <input value={username} type="text" placeholder="Username" className="input input-bordered input-white w-full max-w-xs" onChange={handleChangeUsername}/>
                <input value={password} type="password" placeholder="Password" className="input input-bordered input-white w-full max-w-xs" onChange={ handleChangePassword} />
        
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={() => login({username,password})}>Login</button>
            </div>
          </div>
        </div>
        </div>
          );
    
 
}

export default LoginForm;
