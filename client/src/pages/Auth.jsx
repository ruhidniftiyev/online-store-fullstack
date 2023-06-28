import React from 'react';
import eyepass from '../assets/images/eyepass.png';

const Auth = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="bg-gray-700 w-1/3 flex items-center justify-center flex-col">
        <p className="text-orange-400 font-bold text-5xl">Şəxsi kabinetə</p>
        <p className="text-white font-bold text-5xl">xoş gəlmisiniz!</p>
      </div>
      <div className="w-2/3 bg-white rounded-lg flex justify-center items-center">
        <div className="w-2/5">
          <div>
            <p className="text-3xl font-semibold mb-4">Qeydiyyat</p>
          </div>
          <div className="">
            <form className="flex flex-col justify-center relative">
              <label className="text-sm">E-mail</label>
              <input
                className="border-2 text-base rounded-md h-10 p-2 my-2 outline-none"
                type="text"
                placeholder="E-mail"
              />
              <label className="text-sm">Password</label>
              <input
                className="border-2 text-base rounded-md h-10 p-2 my-2 outline-none"
                type="password"
                placeholder="Password"
              />
              <div onClick={console.log(124)}>
                <img
                  className="w-5 h-5 absolute right-4 top-28 cursor-pointer"
                  src={eyepass}
                  alt=""
                />
              </div>
              <button className="bg-green-600 text-white h-10 my-2 rounded-md text-base">
                Qeydiyyatdan keç
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
