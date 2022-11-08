import React from 'react';
import google from '../../../images/google.png';
import fb from '../../../images/fb_icon.png';

const SocialLogin = () => {
  return (
    <div className="w-full mx-auto mt-5">
      <div className="flex items-center justify-evenly">
        <div className="bg-blue-700 h-1 w-1/3 rounded"></div>
        <p className="text-gray-900 font-semibold">Or</p>
        <div className="bg-blue-700 h-1 w-1/3 rounded"></div>
      </div>
      <div className="w-full flex justify-evenly space-x-11 mt-5">
        <button className="w-1/3 bg-gray-300 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          <img src={google} alt="Sign in with Google" className="w-8 mx-auto" />
        </button>
        <button className="w-1/3 bg-gray-300 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          <img src={fb} alt="Sign in with Facebook" className="w-8 mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
