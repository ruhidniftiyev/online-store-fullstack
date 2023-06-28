import React from 'react';

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
            <form className="flex flex-col justify-center">
              <label className="text-sm">E-mail</label>
              <input
                className="border-2 text-base rounded-md h-10 p-2 my-2"
                type="text"
                placeholder="E-mail"
              />
              <label className="text-sm">Password</label>
              <input
                className="border-2 text-base rounded-md h-10 p-2 my-2"
                type="password"
                placeholder="Password"
              />
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
