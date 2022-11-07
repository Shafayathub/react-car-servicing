import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../images/Login.gif';

const Login = () => {
  return (
    <form class="text-gray-600 body-font">
      <div class="container px-5 py-14 mx-auto flex flex-wrap items-center">
        <img className="mx-auto w-96" src={login} alt="" />

        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-7 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Sign in
          </h2>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <p>
              {' '}
              <small>
                No registered account?{' '}
                <Link to="/register" className="underline text-blue-600">
                  register here
                </Link>
              </small>{' '}
            </p>
          </div>

          <input
            type="submit"
            value="Sign in"
            class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
          />
          <p class="text-xs text-gray-500 mt-3">
            <small>We care about your privacy.</small>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
