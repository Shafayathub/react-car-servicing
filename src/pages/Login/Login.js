import React, { useRef } from 'react';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import login from '../../images/Login.gif';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigate = useNavigate();

  if (user) {
    navigate('/');
  }

  if (sending) {
    return <p className="text-center mt-5">Sending email...</p>;
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('email sent');
    } else {
      toast('Please enter your email address.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <form onSubmit={handleSubmit} className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto flex flex-wrap items-center">
        <img className="mx-auto w-72 lg:w-96" src={login} alt="" />

        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-7 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign in
          </h2>

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
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <p>
              <small>
                No registered account?
                <Link to="/register" className="underline text-blue-600 ml-1">
                  register here
                </Link>
              </small>
            </p>
          </div>
          <div className="relative mb-4">
            <p>
              <small>
                Forget Passord?
                <button
                  onClick={resetPassword}
                  className="underline text-blue-600 ml-1">
                  Reset
                </button>
              </small>
            </p>
          </div>

          <input
            type="submit"
            value="Sign in"
            className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          />
          <ToastContainer />
          <SocialLogin></SocialLogin>
          <p className="text-xs text-gray-500 mt-3">
            <small>We care about your privacy.</small>
          </p>
          <p className="text-red-600">{error && error?.message}</p>
        </div>
      </div>
    </form>
  );
};

export default Login;
