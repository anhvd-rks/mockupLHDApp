import React, {useState} from "react";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../../Components/features/userSlice";
import "./Login.css";

type Props = {};

const Login = (props: Props) => {

  const userList = [
    {
      username: "avd12345",
      password: "123456",
      email: "avd12345@gmail.com"
    },
    {
      username: "avd1234",
      password: "123456",
      email: "avd1234@gmail.com"
    },
    {
      username: "avd123",
      password: "123456",
      email: "avd1234@gmail.com"
    },
    {
      username: "avd123",
      password: "123456",
      email: "avd123@gmail.com"
    },
    {
      username: "avd12",
      password: "123456",
      email: "avd125@gmail.com"
    },
]
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    let submit = {
      email: email,
      password: password
    }
    if(userList.filter((o) => o.email === submit.email && o.password === submit.password).length > 0){
      dispatch(login({
        email: email,
        password: password,
        loggedIn: true,
      }))
    }
    else{
      setError("Wrong email or password! Try again")
    }
    e.preventDefault();
  }

  return (
    <>
      <div className="page">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="mx-auto h-10 w-auto" style={{textAlign: 'center', fontWeight: 700}}>Login</h1>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input
                  onChange={(e) =>{setEmail(e.target.value); setError('')}}
                  id="email" 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  required 
                  style={{padding: 10}}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
                </div>
                <div className="mt-2">
                  <input 
                  onChange={(e) => {setPassword(e.target.value); setError('')}}
                  id="password" 
                  name="password" 
                  type="password" 
                  autoComplete="current-password" 
                  required 
                  style={{padding: 10}}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              <div>
                <div className="errorText" style={{ display: error ? 'block' : 'none'}}>{error}</div>
                <button 
                type="submit" 
                onClick={(e)=>handleSubmit(e)}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
