import { NavLink, useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
const Login = () => {
  const { useState } = require("react");
  const dispatch = useDispatch();
  const nav=useNavigate();
  const [errors,setErrors] = useState({});
  const [hello, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLogin({ ...hello, [e.target.id]: e.target.value });
  };
  const notify=(e)=>{
        e.preventDefault();
        toast.success("Reset Password link sent to your mail");
  }
  const handleClick = (e) => {
    e.preventDefault();
    const validationErrors={}
    if(!hello.email.trim()){
      validationErrors.email="Email is required";
      toast.error("Enter email");
    }
    else if(!/\S+@\S+\.\S+/.test(hello.email)){
      validationErrors.email="Email is invalid";
    }
    if(!hello.password.trim()){
      validationErrors.password="Password is required";
    }
    setErrors(validationErrors);
    if(Object.keys(validationErrors).length===0){
      dispatch(login({
        email :hello.email
    }))
    nav('/dashboard')
    // nav("/dashboard");
    // toast.success('Login Successful');
      // toast.success('Login Successful');
      // nav('/navbar')
  }
  };

  return (
    <div class="flex justify- items-center  min-h-screen">
     <img src="https://res.cloudinary.com/dojmk32dv/image/upload/v1695311497/supermarket-management-software_q6svgx.jpg" className="h-screen" alt=""></img>
      <form
        onSubmit={handleClick}
        class="relative flex flex-col  h-screen  space-y-5  bg-white shadow-2xl shadow-blackrounded-2xl md:flex-row md:space-y-0"
      >
        <div class="flex flex-col justify-20 align-items-center p-2 md:p-14 ">
        <Toaster/>
          <span className=" text-4xl font-bold text-blue-600">Welcome Back!</span>
          <span class="font-light text-gray-400 mb-8 text-2xl">
            Please Enter your details
          </span>
          <div class="py-4  justify-between">
            <label class="mb-2 text-md text-xl font-serif">Email:</label>
            <input
              type="text"
              placeholder="Enter email"
              id="email"
              onChange={handleChange}
              class="w-full p-2 border border-white hover:placeholder:text-black ouline-none hover:outline-none hover:bg-yellow-100  rounded-md"
            ></input>
            {errors.email && <span class="text-red-500">{errors.email}</span>}
          </div>
          <div class="py-4  justify-between">
            <label class="mb-2 text-md text-xl font-serif">Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              class=" w-full p-2 border border-white  rounded-md
                    hover:placeholder:text-black
                    hover:text-black  hover:bg-yellow-100  hover:outline-none ouline-none"
              onChange={handleChange}
            ></input>
            {errors.password && <span class="text-red-500">{errors.password}</span>}
          </div>
           <div class="flex justify-between w-ful ">
          {/*  <div class="mr-24">
              <label class="text-md" htmlFor="ch">
                <input
                  type="checkbox"
                  name="ch"
                  id="ch"
                  class="mr-2 "
                  onChange={handleCheck}
                ></input>
                Remember me
              </label>
            </div> */}
            <NavLink to='/forgot'>
            <span class="font-serif text-md cursor-pointer hover:text-blue-500 hover:underline">
              Forget password ?
            </span>
            </NavLink>
          </div>
          <div class="flex flex-col space-y-2">
            <button
              class="w-full bg-black text-white p-2 rounded-lg mt-5
                 font-bold font-serif hover:text-black hover:bg-yellow-100"
            >
              Sign in
            </button>

            <span class="flex justify-center items-center">or</span>
            <button class=" flex gap-4 justify-center w-full bg-black  font-serif text-white font-bold p-2 rounded-lg hover:bg-yellow-100  hover:text-black ">
              <FcGoogle class="mt-1" />
              Sign in with Google
            </button>
          </div>
          <span className="hover:underline hover:text-blue-400 font-serif cursor-pointer" onClick={()=>nav('/signup')}>Doesn't have an account? Signup</span>
        </div>
      </form>
        
      
   

      </div>                                                                
  );
};
export default Login;
