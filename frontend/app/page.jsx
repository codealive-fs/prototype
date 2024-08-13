"use client";
import Image from "next/image";
// import { RegisterUserAction } from "./data/actions/auth-actions";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";

export default function Home() {

  const router = useRouter();
  //Affan Bahi Code
  //_______________________________________________________________
  //   const formSubmitHandler = async (e) => {
    //     const response = await RegisterUserAction(e);
    //     if (response) {
      //       // Router.push('/home')
      //     }
      //   };
      
      //   const router = useRouter();
//___________________________________________________________________________

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await axios({
    method: 'post',
    url: 'http://localhost:1337/api/auth/local',
      headers: {}, 
      data: {
        identifier: email,
        password: password,
      }
    });
    
    console.log(res.data);
    // const res = await axios.post('http://localhost:1337/api/auth/local', {
      //   identifier: email,
    //   password: password,
    // });
    
    localStorage.setItem('token', res.data.jwt);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    ////
    router.push('/dashboard'); // Redirect to the dashboard
    alert('Login successful');
};

return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        {/* Start of the form tag */}
        {/* <form className="space-y-4" action={RegisterUserAction} method="POST"> */}
        {/* <form className="space-y-4" onSubmit={handleSubmit} method="POST"> */}
        <form className="space-y-4" onSubmit={handleSubmit}>  
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">
            Remember me
          </label>
        </div> */}
            {/* <div className="text-sm">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
          </a>
        </div> */}
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
{/* Affan bahi code___________________________________________________________ */}
            {/* <Link href="/dashboard">Go to Dashboard</Link>
            <button
              onClick={() => router.push("/dashboard")}
              href="/dashboard"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            > */}
              {/* on click dashboard{" "}
            </button> */}
          </div>
        </form>
        {/* End of the form tag */}
      </div>
    </div>
  );

  //   return (
  //     <>
  //       <form>
  //       <section className="bg-gray-50">
  //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
  //       {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
  //           <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
  //           Flowbite
  //       </a> */}
  //       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black ">
  //           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
  //               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
  //                   Sign in to your account
  //               </h1>
  //               <form className="space-y-4 md:space-y-6" action="#">
  //                   <div>
  //                       <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
  //                       <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
  //                   </div>
  //                   <div>
  //                       <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
  //                       <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
  //                   </div>
  //                   <div className="flex items-center justify-between">
  //                       <div className="flex items-start">
  //                           {/* <div className="flex items-center h-5">
  //                             <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
  //                           </div> */}
  //                           {/* <div className="ml-3 text-sm">
  //                             <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
  //                           </div> */}
  //                       </div>
  //                       {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
  //                   </div>
  //                   <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
  //                   {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
  //                       Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
  //                   </p> */}
  //               </form>
  //           </div>
  //       </div>
  //   </div>
  // </section>
  //       </form>

  //     </>
  // );
}
