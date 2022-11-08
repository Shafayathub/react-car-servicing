import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../images/Developer-activity.gif';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  if (user) {
    navigate('/home');
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    console.log(password, confirmPassword);
    if (confirmPassword === password) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="text-gray-600 body-font">
      <div className="container px-5 py-6 mx-auto flex flex-wrap items-center">
        <img className="mx-auto w-72 lg:w-96" src={login} alt="" />

        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-7 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Register
          </h2>
          {/* <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              ref={nameRef}
              type=""
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div> */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              password
            </label>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Confirm password
            </label>
            <input
              ref={confirmPasswordRef}
              type="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <p>
              <small>
                Already have an account?
                <Link to="/login" className="underline text-blue-600 ml-1">
                  Sign in
                </Link>
              </small>
            </p>
          </div>

          <input
            type="submit"
            value="Register"
            className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          />
          <SocialLogin></SocialLogin>
          <p className="text-xs text-gray-500 mt-3">
            <small>We care about your privacy.</small>
          </p>
          <p className="text-red-600">{error && error?.code}</p>
        </div>
      </div>
    </form>
  );
};

export default Register;
